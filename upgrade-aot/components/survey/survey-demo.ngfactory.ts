/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../components/survey/survey-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/survey/survey';
import * as import9 from './survey.ngfactory';
export class Wrapper_SurveyDemo {
  /*private*/ _eventHandler:Function;
  context:import0.SurveyDemo;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.SurveyDemo();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SurveyDemo_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SurveyDemo_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SurveyDemo>;
  _SurveyDemo_0_3:Wrapper_SurveyDemo;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SurveyDemo_Host0,renderType_SurveyDemo_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'survey-demo',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SurveyDemo0(this.viewUtils,this,0,this._el_0);
    this._SurveyDemo_0_3 = new Wrapper_SurveyDemo();
    this.compView_0.create(this._SurveyDemo_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SurveyDemo_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SurveyDemo) && (0 === requestNodeIndex))) { return this._SurveyDemo_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SurveyDemo_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SurveyDemoNgFactory:import7.ComponentFactory<import0.SurveyDemo> = new import7.ComponentFactory<import0.SurveyDemo>('survey-demo',View_SurveyDemo_Host0,import0.SurveyDemo);
const styles_SurveyDemo:any[] = ([] as any[]);
var renderType_SurveyDemo:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_SurveyDemo,{});
export class View_SurveyDemo0 extends import1.AppView<import0.SurveyDemo> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import8.Survey>;
  _Survey_3_3:import9.Wrapper_Survey;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SurveyDemo0,renderType_SurveyDemo,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Survey using Dynamic Form',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'survey',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_3 = new import9.View_Survey0(this.viewUtils,this,3,this._el_3);
    this._Survey_3_3 = new import9.Wrapper_Survey();
    this.compView_3.create(this._Survey_3_3.context);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2,
      this._el_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import8.Survey) && (3 === requestNodeIndex))) { return this._Survey_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.questionModel;
    this._Survey_3_3.check_model(currVal_3_0_0,throwOnChange,false);
    this._Survey_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.compView_3.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
  }
}