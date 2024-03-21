import React, { useRef } from "react";
import { useMountEffect } from "primereact/hooks";

import { Navbar } from "../Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";

function Solicitante() {
  const msgs = useRef(null);
  let products = [
    {
      ID_Solicitud: 1,
      No_Requisicion_SAP: "ABC123",
      Fecha_Hora_Creacion: "2024-03-19 10:00:00",
      Fecha_Vencimiento: "2024-04-19",
      No_referencia: "REF001",
      Centro_de_costo: "CC001",
      Empresa: "Empresa A",
      Comentarios: "Comentario 1",
      No_OC_SAP: "OC123",
      Sincronizado: true,
      Adjunto1: "adjunto1.pdf",
      Adjunto2: "adjunto2.pdf",
      Notas_autorizacion: "Notas de autorización 1",
      Notas_requisitor: "Notas del requisitor 1",
    },
    {
      ID_Solicitud: 2,
      No_Requisicion_SAP: "DEF456",
      Fecha_Hora_Creacion: "2024-03-19 11:30:00",
      Fecha_Vencimiento: "2024-04-30",
      No_referencia: "REF002",
      Centro_de_costo: "CC002",
      Empresa: "Empresa B",
      Comentarios: "Comentario 2",
      No_OC_SAP: "OC456",
      Sincronizado: false,
      Adjunto1: "adjunto3.pdf",
      Adjunto2: "",
      Notas_autorizacion: "Notas de autorización 2",
      Notas_requisitor: "Notas del requisitor 2",
    },
    {
      ID_Solicitud: 3,
      No_Requisicion_SAP: "GHI789",
      Fecha_Hora_Creacion: "2024-03-20 09:15:00",
      Fecha_Vencimiento: "2024-04-15",
      No_referencia: "REF003",
      Centro_de_costo: "CC003",
      Empresa: "Empresa C",
      Comentarios: "Comentario 3",
      No_OC_SAP: "OC789",
      Sincronizado: true,
      Adjunto1: "",
      Adjunto2: "",
      Notas_autorizacion: "Notas de autorización 3",
      Notas_requisitor: "Notas del requisitor 3",
    },
    // Puedes agregar más objetos aquí si es necesario
  ];

  useMountEffect(() => {
    if (msgs.current) {
      msgs.current.clear();
      msgs.current.show({
        id: "1",
        sticky: true,
        severity: "info",
        summary: "Info",
        detail: "Solicitante paguina :b",
        closable: false,
      });
    }
  });

  return (
    <div className="card flex justify-content-center">
      <Navbar />
      <Card title="Simple Card">
        <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
          <Column field="ID_Solicitud" header="Code"></Column>
          <Column field="Fecha_Hora_Creacion" header="Name"></Column>
          <Column field="Fecha_Vencimiento" header="Category"></Column>
          <Column field="No_referencia" header="Quantity"></Column>
          <Column field="Centro_de_costo" header="Code"></Column>
          <Column field="Empresa" header="Name"></Column>
          <Column field="Comentarios" header="Category"></Column>
          <Column field="No_OC_SAP" header="Quantity"></Column>
          <Column field="Sincronizado" header="Code"></Column>
          <Column field="Adjunto1" header="Name"></Column>
          <Column field="Adjunto2" header="Category"></Column>
          <Column field="Notas_autorizacion" header="Quantity"></Column>
          <Column field="Notas_requisitor" header="Quantity"></Column>
        </DataTable>
      </Card>
    </div>
  );
}

export default Solicitante;
