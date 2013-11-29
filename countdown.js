window.ui = {};

/*
 * countdown
 */
(function(global, document){
    var ns = global.ui || (global.ui = {}),
    	fn;
    ns.CountDown = function(){
        this.init.apply(this, arguments);
    }
    fn = ns.CountDown.prototype;
    fn.init = function(pOption){
        var self = this,
            tArr = ['h', 'm', 's'],
            tElms = [],
            i,
            il;
        self.timeElm = pOption.timeElm;
        self.nowTime = pOption.startTime;
        self.endTime = pOption.endTime;
        self.cssControl = pOption.cssControl || false;
        self.hmsType = pOption.hmsType;
        self.hmsElms = [];
        for(i=0, il=tArr.length; i<il; i++){
            if(this.hmsType[tArr[i]]){
                tElms[i] = document.createElement('span');
                tElms[i].setAttribute('class', tArr[i]);
                self.hmsElms.push(self.timeElm.appendChild(tElms[i]));
            }
        }
        self.count();
    }
    fn.zeroPadding = function(pNum){
        return ('0'+pNum).slice(-2);
    }
    fn.count = function(){
        var self = this,
            i,
            il;
        self.tTime = (self.endTime - self.nowTime) / 1000;
        self.tHour = "" + (self.tTime/36000|0) + (self.tTime/3600%10|0);
        self.tMin = "" + (self.tTime%3600/600|0) + (self.tTime%3600/60%10|0);
        self.tSec = "" + (self.tTime%60/10|0) + (self.tTime%60%10);

        if(self.tTime >= 0){
            for (i=0, il=self.hmsElms.length; i<il; i++) {
                self.writeTime(self.hmsElms[i]);
            }
        }
        if(self.tTime > 0){
            self.nowTime.setTime(self.nowTime.getTime() + 1000);
            setTimeout(function(){self.count();}, 1000);
        }
    }
    fn.writeTime = function(target){
        var self = this,
            hmsType = target.getAttribute('class');
        if(hmsType == 'h'){
            rewrite(self.tHour);
        }else if(hmsType == 'm'){
            rewrite(self.tMin);
        }else if(hmsType == 's'){
            rewrite(self.tSec);
        }
        function rewrite(time){
            var tElm,
                tTimer = self.zeroPadding(time),
                tStrs = tTimer.split(''),
                i,
                il;
            while(target.firstChild){
                target.removeChild(target.firstChild);
            }
            for (i=0, il=tStrs.length; i<il; i++) {
                if(self.cssControl){
                    tElm = document.createElement('span');
                    tElm.setAttribute('class', 'num');
                    tElm.setAttribute('title', tStrs[i]);
                    target.appendChild(tElm);
                }else{
                    target.innerHTML = target.innerHTML + tStrs[i];
                }
            }
        }
    }
})(this, this.document);