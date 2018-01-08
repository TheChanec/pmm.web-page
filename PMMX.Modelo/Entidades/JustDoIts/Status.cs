﻿using PMMX.Modelo.Entidades.JustDoIts;
using PMMX.Modelo.Entidades.Maquinaria;
using PMMX.Modelo.Entidades.Operaciones;
using PMMX.Modelo.Entidades.Warehouse;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMMX.Modelo.Entidades.Operaciones
{
    public class Status
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int NombreCorto { get; set; }
        public int Activo { get; set; }


        public List<StatusVentana> StatusVentana { get; set; }
    }
}
