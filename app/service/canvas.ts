module App.Services {
    import Logger = App.Services.Logger;
    export class Canvas {
        static $inject = ['Logger'];

        private logger:Logger;
        //private paper:RaphaelPaper;
        //private paperId = "paper";
        //private paperWidth = 500;
        //private paperHeight = 500;

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('canvas service init');

            //// init the real canvas
            //this.paper = Raphael(document.getElementById(this.paperId),
            //    this.paperWidth, this.paperHeight);
            //// TODO: check if the logger truly init
            //this.logger.log('paper init');
        }

    }
}