const Game_Object = [];

export class GameObject {
    constructor() {
        Game_Object.push(this);
        this.has_called = false;
        this.timedelta = 0;
    }

    start() {

    }

    update() {

    }

    on_destory() {

    }

    destory() {
        this.on_destory();

        for (let i in Game_Object) {
            if (Game_Object[i] === this) {
                Game_Object.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;
const setp = timestamp =>{
    for (let obj of Game_Object){
        if (!obj.has_called){
            obj.start();
            obj.has_called = true;
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(setp);
}


requestAnimationFrame(setp);