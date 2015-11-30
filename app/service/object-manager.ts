/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    import Logger = App.Services.Logger;
    export class ObjectManager {
        static $inject = ['Logger'];
        private logger:Logger;
        public objects = [];
        private counter:number = 0;

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('object manager service init');
        }

        // TODO: trigger angular digest
        public add(obj:any) {
            this.counter++;
            obj.name = 'id' + this.counter.toString();
            this.objects.push(obj);
        }

        public createRect(){

        }
    }
}