// Trying to load a module which should already be present in main bundle
import Human from './human';

/**
 * Superman class
 */
export default class Superman extends Human {
    /**
     * @param {*} obj
     */
    constructor(obj) {
        super(obj.name, obj.age);
        this.obj = obj;
    }
    /**
     * Says yo!
     * @return {String}
     */
    yo() {
        return 'yo man' + JSON.stringify(this.obj);
    }
}
