namespace Soccer {

    export class Vector {
        public x: number = 0;
        public y: number = 0;
        public length: number = 0;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
            this.calcLength();
        }

        public set(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.calcLength();

        }

        /* public add(_vector: Vector): void {
            this.x += _vector.x;
            this.y += _vector.y;
            this.calcLength();

        } */

        public distance(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public static getRandom(_min: number, _max: number): Vector {
            let tempVector: Vector = new Vector(0, 0);
            tempVector.set(_min + Math.random() * (_max - _min), _min + Math.random() * (_max - _min));
            return tempVector;
        }
        
        /* public static getDifference(_v0: Vector, _v1: Vector): Vector {
            let tempVector: Vector = new Vector(0, 0);
            tempVector.set(_v0.x - _v1.x, _v0.y - _v1.y);
            return tempVector;
        } */
        public static getSum(_v0: Vector, _v1: Vector): Vector {
            let tempVector: Vector = new Vector(0, 0);
            tempVector.set(_v0.x + _v1.x, _v0.y + _v1.y);
            return tempVector;
        }
        
        public static getScaled(_v: Vector, _scale: number): Vector {
            let tempVector: Vector = new Vector(0, 0);
            tempVector.set(_v.x * _scale, _v.y * _scale);
            return tempVector;
        }

        /* public static getLength(_vector: Vector): number {
            let templength: number;
            templength = Math.sqrt((_vector.x * _vector.x) + (_vector.y * _vector.y));
            return templength;
        } */
        
        public static getUberVector(_length: number, _direction: Vector): Vector {
            let tempVector: Vector = new Vector(_direction.x / (_direction.length), _direction.y / (_direction.length));
            tempVector = this.getScaled(tempVector, _length);
            return tempVector;
        }

        /* public clone(): Vector {
            return new Vector(this.x, this.y);
        } */

        private calcLength(): void {
            this.length = Math.sqrt((this.x * this.x) + (this.y * this.y));
        }

        public copy(): Vector{
            return new Vector(this.x, this.y);
        }
    }
    //Meine Richtung
    /*     public toBall(_ballLength: number, _position: number): void{
            //Abstand zwische Spieler und Ball?
            let length: number = _ballLength * (_position - _ballLength);
            //richtung
            let direction: number = _ballLength;

            this.set(Math.cos(direction),Math.sin(direction));
            this.distance(length);
            
        }
 */
}

