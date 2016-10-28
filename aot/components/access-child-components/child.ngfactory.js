import * as import0 from '../../../components/access-child-components/child';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_Child {
    constructor() {
        this.changed = false;
        this.context = new import0.Child();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_Child_Host = null;
class _View_Child_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Child_Host0, renderType_Child_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'child', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Child0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Child_0_4 = new Wrapper_Child();
        this._appEl_0.initComponent(this._Child_0_4.context, [], compView_0);
        compView_0.create(this._Child_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Child) && (0 === requestNodeIndex))) {
            return this._Child_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Child_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Child_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Child_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Child_Host === null)) {
        (renderType_Child_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Child_Host0(viewUtils, parentInjector, declarationEl);
}
export const ChildNgFactory = new import9.ComponentFactory('child', viewFactory_Child_Host0, import0.Child);
const styles_Child = [];
var renderType_Child = null;
class _View_Child0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Child0, renderType_Child, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([], [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import4.interpolate(1, '', this.context.time, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Child0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Child === null)) {
        (renderType_Child = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Child, {}));
    }
    return new _View_Child0(viewUtils, parentInjector, declarationEl);
}
