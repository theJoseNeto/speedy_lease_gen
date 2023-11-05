const fs = require("fs");
const PDFDocument = require("pdfkit-table");

let doc = new PDFDocument({ margin: 30, size: 'A4' });
doc.pipe(fs.createWriteStream("./document.pdf"));

(async function () {

    doc.fontSize(24).image("./logo.png", 20, 20, { width: 150 }).text("OLIVEIRA \n LOCADORA \n DE VEÍCULOS", { align: "center" });
    doc.moveDown().fontSize(10);
    doc.text("44.222.223/0001-79 \n Avenida Bernardo Vieira de Melo, 4114 \n Piedade - Jaboatão dos Guararapes - PE \n Tel: (81) 9 9205-1513, (81) 9 9205-1513", { align: "center" })

    const tableLlocatario = {
        title: "Dados do Locatário",
        headers: [
            { label: "Name", property: "name", width: 100, renderer: null },
            { label: "CPF/CNPJ", property: "CPF/CNPJ", width: 100, renderer: null },
            { label: "telefone", property: "telefone", width: 100, renderer: null },
            { label: "Endereço", property: "address", width: 100, renderer: null },

        ],
        rows: [
            ["Fulano de tal", "111.222.333-44", "81 9999-9999", "Rua dis bibi"],
        ],
    };

    const tablePeriodo = {
        title: "Periodo de locação",
        headers: [
            { label: "Incício da locação", property: "incio", widith: 100, renderer: null },
            { label: "Fim da locação", property: "fim", widith: 100, renderer: null },
            { label: "Período", property: "periodo", widith: 100, renderer: null },

        ],

        rows: [
            ["xx/xx/xxxx", "xx/xx/xxxx", "x dias"]
        ]
    }

    const tableVeiculo = {
        title: "Veículo",
        headers: [
            { label: "Veículo", property: "veiculo", widith: 100, renderer: null },
            { label: "Modelo", property: "Modelo", widith: 100, renderer: null },
            { label: "Placa", property: "placa", widith: 100, renderer: null },
            { label: "Plano", property: "plano", widith: 100, renderer: null },
            { label: "Renavam", property: "renavam", widith: 100, renderer: null },
            { label: "Ôdom.\nSaída", property: "odomSaida", widith: 100, renderer: null },
            { label: "Ôdom.\ncheagada", property: "odomCheagada", widith: 100, renderer: null },
            { label: "Tanque\nSaída", property: "tanqueSaida", widith: 100, renderer: null },
            { label: "Tanque\nchegada", property: "tanqueChegada", widith: 100, renderer: null },

        ],

        rows: [
            ["Carro", "Audi TT", "placa123", "PLANO", "123456789", "NIVEL ODOM.", "NIVEL ODOM.", "Pela boca", "Do jeito que achou"]
        ]
    }

    const tableResumo = {
        title: "Resumo",
        headers: [
            { label: "Descrição", property: "descricao", widith: 100, renderer: null },
            { label: "Dia/Km", property: "diaKm", widith: 100, renderer: null },
            { label: "Valor", property: "valor", widith: 100, renderer: null },
            { label: "Total", property: "total", widith: 100, renderer: null }
        ],
        rows: [
            ["Descrição     ", "100 Km", "$50", "$5000"]
        ]
    }


    await doc.table(tableLlocatario, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
        // columnsSize: [100, 100, 100, 100]
    })

    await doc.table(tablePeriodo);

    await doc.table(tableVeiculo);
    await doc.table(tableResumo)
    await doc.moveDown();

    await


        doc.end();
})();