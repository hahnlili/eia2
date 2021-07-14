namespace Soccer {

    export class Movable {


        //habe velocity zu speed geändert, sollte ja kein problem sein?
        
        public position: Vector;

        constructor() {
            // console.log("Movable constructor");
            this.position = new Vector(0, 0);
        }

        public move(_timeslice: number): void {
            
        }


        public draw(): void {

        }
    }
}
