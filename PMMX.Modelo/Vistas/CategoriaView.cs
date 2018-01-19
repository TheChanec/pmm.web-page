﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMMX.Modelo.Vistas
{
    public class CategoriaView
    {
        #region Propiedades
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string NombreCorto { get; set; }
        public int IdResponsable { get; set; }
        public string Color { get; set; }
        public bool Activo { get; set; }
        #endregion

        #region Navegacion
        public PersonaView Responsable { get; set; }

        public ICollection<SubCategoriaView> SubCategorias { get; set; }
        public ICollection<GrupoPreguntasView> GrupoPreguntas { get; set; }
        public ICollection<EstatusView> Estatus { get; set; }
        #endregion
    }
}
