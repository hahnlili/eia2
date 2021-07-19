namespace Soccer {

    export class Field {

        private crc2: CanvasRenderingContext2D;

        //nimmt crc2 weil er das benutzen will
        //um objekt zu erstellen ruf ich constructor auf
        constructor(_crc2: CanvasRenderingContext2D) {
            this.crc2 = _crc2;
        }

        
        /* Public weil mein drauf zugreifen darf */
        public draw(): void {

            //Grüne Rasenfläche
            crc2.beginPath();
            crc2.fillStyle = "#70bf5d";
            crc2.strokeStyle = "white";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.stroke();

            //Feld umrandung
             crc2.beginPath();
             crc2.strokeStyle="white";
             crc2.lineWidth=4;
             crc2.rect(0, 0,crc2.canvas.width, crc2.canvas.height);
             crc2.closePath();
             crc2.stroke();
 

            //Mittellinie
            crc2.beginPath();
            crc2.lineWidth=4;
            crc2.moveTo(crc2.canvas.width * 0.5, crc2.canvas.height);
            crc2.lineTo(crc2.canvas.width * 0.5, crc2.canvas.height - crc2.canvas.height);
            crc2.stroke();
            
            //Mittelkreis
            crc2.beginPath();
            crc2.fillStyle = "#70bf5d";
            crc2.lineWidth=5;
            crc2.arc(crc2.canvas.width * 0.5, crc2.canvas.height * 0.5, 150, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Mittelpunkt
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(crc2.canvas.width * 0.5, crc2.canvas.height * 0.5, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


            //Die Linien über den Toren noch
            crc2.beginPath();
            crc2.strokeStyle="white";
            crc2.lineWidth=4;
            crc2.rect(0, crc2.canvas.height*0.25, 200, crc2.canvas.height*0.5);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle="white";
            crc2.lineWidth=4;
            crc2.rect(crc2.canvas.width, crc2.canvas.height*0.25, -200, crc2.canvas.height*0.5);
            crc2.closePath();
            crc2.stroke();

            //Tore links und rechts
            crc2.beginPath();
            crc2.strokeStyle="white";
            crc2.lineWidth=4;
            crc2.rect(0, crc2.canvas.height*0.35, 120, crc2.canvas.height*0.30);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle="white";
            crc2.lineWidth=4;
            crc2.rect(crc2.canvas.width, crc2.canvas.height*0.35, -120, crc2.canvas.height*0.3);
            crc2.closePath();
            crc2.stroke();
        }

    }
}