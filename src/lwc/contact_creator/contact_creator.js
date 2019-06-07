/**
 * Created by Pranay.Jaiswal on 06/06/2019.
 */

import { LightningElement } from 'lwc';
import { updateRecordWithToast } from 'c/lwc_utils';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';

export default class ContactCreator extends LightningElement {

    createContact(){
        const fields = {};
        fields[FIRSTNAME_FIELD.fieldApiName] = 'Pikachu22';
        fields[ID_FIELD.fieldApiName] = '0030C000002POql';
        fields[LASTNAME_FIELD.fieldApiName] = 'Raichu';
        const recordInput = { fields };

        updateRecordWithToast(recordInput , this);
    }
}

