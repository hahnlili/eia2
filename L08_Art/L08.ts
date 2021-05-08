namespace Memory {
    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;



    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        let crc3: CanvasRenderingContext2D = canvas.getContext("2d")!;
        let crc4: CanvasRenderingContext2D = canvas.getContext("2d")!;
        console.log("hallo");

        crc2.fillStyle = "#fff7e3";
        crc2.fillRect(2, 2, crc2.canvas.width, crc2.canvas.height);

        /*  crc2.beginPath();
         crc2.arc(89, 67, 45, 6, 1.5 * Math.PI);
         crc2.closePath();
         crc2.stroke();
         crc2.fillStyle = "#ff0000"; */

        //i ist 0 und solange i kleiner ist als 22 wird die for schleife ausgeführt --> keine ahnung weshalb meine schleife nicht richtig funktioniert?
        for (let i: number = 0; i < 22; i++) {
            //console.log("hallo " + i);
            art1();
            
        }

        for (let i: number = 0; i < Math.random() * 9; i++) {
            art2();

        }





        function art1(): void {
            //console.log("hä");
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (800) + 1), Math.floor(Math.random() * (900) + 1), Math.floor(Math.random() * (20) + 1), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "#" + ((1 << 24) * Math.random() | 0).toString(16); //aus dem internet geklaut :)

        }
        function art2(): void {
            let x: number = (Math.random()*800);
            let y: number = (Math.random()*800);
            let size: number = (Math.random()*300);
            crc3.beginPath();
            crc3.moveTo(x,y);
            crc3.lineTo(x , y + size);
            crc3.lineTo(x + size, y + size);
            crc3.lineTo(x + size, y );
            crc3.lineTo(x,y);
            crc3.stroke();
            crc3.closePath();
            
            crc3.strokeStyle = "#" + ((1 << 24) * Math.random() | 0).toString(16);
            
        if (size > 200){
            console.log("hallo du, es kommt auf die größe an");
            art3(x,y,size);
        }
            
        }



        function art3(x:number,y:number, size: number): void{

            x = x + 0.5*size;
            y = y + 0.5*size;
            crc4.beginPath();
            crc4.arc(x, y, 5, 0, 2 * Math.PI);
            crc4.closePath();
            crc4.fill();
            crc4.fillStyle = "#000000";

            
            crc4.beginPath();
            crc4.arc(x+20, y, 5, 0, 2 * Math.PI);
            crc4.closePath();
            crc4.fill();
            crc4.fillStyle = "#000000";
            
            crc4.beginPath();
            crc4.moveTo(x,y+10);
            crc4.bezierCurveTo(x,y+20,x+20,y+20,x+20,y+10);
            crc4.strokeStyle = "#000000";
            crc4.stroke(); // wieso hat der smiley manchmal nur ein auge? .(

            
            
        }

    }
}
