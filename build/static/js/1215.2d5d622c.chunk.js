"use strict";(self.webpackChunkportfolio_2024=self.webpackChunkportfolio_2024||[]).push([[1215],{1215:(e,i,t)=>{t.d(i,{LifeUpdater:()=>r});var n=t(4409);class o extends n.PV{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class a extends n.PV{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class s{constructor(){this.count=0,this.delay=new o,this.duration=new a}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class r{constructor(e){this.container=e}init(e){const i=this.container,t=e.options.life;t&&(e.life={delay:i.retina.reduceFactor?(0,n.VG)(t.delay.value)*(t.delay.sync?1:(0,n.G0)())/i.retina.reduceFactor*n.Xu:0,delayTime:0,duration:i.retina.reduceFactor?(0,n.VG)(t.duration.value)*(t.duration.sync?1:(0,n.G0)())/i.retina.reduceFactor*n.Xu:0,time:0,count:t.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e){e.life||(e.life=new s);for(var i=arguments.length,t=new Array(i>1?i-1:0),n=1;n<i;n++)t[n-1]=arguments[n];for(const o of t)e.life.load(null===o||void 0===o?void 0:o.life)}update(e,i){this.isEnabled(e)&&e.life&&function(e,i,t){if(!e.life)return;const o=e.life;let a=!1;if(e.spawning){if(o.delayTime+=i.value,!(o.delayTime>=e.life.delay))return;a=!0,e.spawning=!1,o.delayTime=0,o.time=0}if(-1===o.duration)return;if(e.spawning)return;if(a?o.time=0:o.time+=i.value,o.time<o.duration)return;if(o.time=0,e.life.count>0&&e.life.count--,0===e.life.count)return void e.destroy();const s=(0,n.DT)(0,t.width),r=(0,n.DT)(0,t.width);e.position.x=(0,n.BH)(s),e.position.y=(0,n.BH)(r),e.spawning=!0,o.delayTime=0,o.time=0,e.reset();const l=e.options.life;l&&(o.delay=(0,n.VG)(l.delay.value)*n.Xu,o.duration=(0,n.VG)(l.duration.value)*n.Xu)}(e,i,this.container.canvas.size)}}}}]);
//# sourceMappingURL=1215.2d5d622c.chunk.js.map