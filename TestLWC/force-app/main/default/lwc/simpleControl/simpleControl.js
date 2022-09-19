import { LightningElement, api } from 'lwc';

export default class SimpleControl extends LightningElement {
    _orginalValue = 0
    @api set orginalValue(value) {
        this._orginalValue = value;
        this.updateDoubleValue();
    }

    get orginalValue() {
        return this._orginalValue;
    }

    renderedCallback() {
        this.updateDoubleValue();
    }

    updateDoubleValue() {
        var textComp = this.template.querySelector('[data-id="double_text"]');
        if (textComp) {
            textComp.value = `Double value of ${this.orginalValue} is: ${this.orginalValue*2}`;
        }
    }
}