﻿'use strict' 
const express = require('express') 
const fileSystem = require('fs') 
const path = require('path') 
const cfenv = require('cfenv') 
const ejs = require('ejs') 
const app = express() 
//set public as the static resource and view template 
app.use(express.static(__dirname + '/public')) 
 app.set('views', __dirname + '/public'); 
 app.engine('html', require('ejs').renderFile); 
 //set plist and ipa path 
 const config = require('./config.js') 
 const appPath = '/app/'+ config.APP_NAME +'.ipa' 
 const plistFilePath = path.join(__dirname, '/app/manifest.plist') 
 const ipaFilePath = path.join(__dirname, appPath) 
 
 
 app.get('/',function(req,res){ 
   const downloadUrl = "window.location.href='itms-services://?action=download-manifest&url="+config.WEB_URL + "/app/download'" 
   res.render('app.html', {downloadUrl: downloadUrl}) 
 }) 
 
 
 //response to download action 
 app.get('/app/download',function(req,res){ 
 	  res.set('Content-Type', 'text/xml plist') 
 	  res.sendFile(plistFilePath) 
 }) 
 //Set HTTP Header and transfer app stream 
 app.get(appPath,function(req,res){ 
 		res.set('Content-Type','application/octet-stream ipa') 
 		res.sendFile(ipaFilePath) 
 }) 
 // get the app environment from Cloud Foundry 
 var appEnv = cfenv.getAppEnv() 
 // start server on the specified port and binding host 
 app.listen(appEnv.port, '0.0.0.0', function() { 
 	// print a message when the server starts listening 
   console.log("server starting on " + appEnv.url) 
 }) 

//Class button action for open a modal CRUD operations 
 $(".btn-action").on("click", function () {
     var url = $(this).data("url");
     var html = '';

     $.get(url, function (data)
     {
         html += "<div class='modal fade' id='createAssetModal' tabindex='- 1' role='dialog' aria-labelledby='CreateAssetModal' aria-hidden='true' data-backdrop='static'>";
         html += " <div class='modal-dialog' >"
         html += "  <div class='modal-content'>"
         html += "   <div class='modal-header alert-info'><button type='button' class='close' data-dismiss='modal'>&times;</button></div>"
         html += "   <div id='createAssetContainer' class='modal-body'></div>"
         html += "  </div>"
         html += " </div>"
         html += "</div>"

         $('#divContainer').html(html);// Need to create a div with id like divContainer
         $('#createAssetContainer').html(data);
         $('#createAssetModal').modal('show');
     });
 });