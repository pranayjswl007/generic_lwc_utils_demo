/**
 * Created by Pranay.Jaiswal on 06/06/2019.
 */

import { LightningElement , api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'


const updateRecordWithToast = (recordInput , maincomInstance) => {
            updateRecord(recordInput)
                .then(() => {
                    maincomInstance.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Lead updated',
                            variant: 'success'
                        })
                    );
                    // Display fresh data in the form
                    return refreshApex(maincomInstance.lead);
                })
                .catch(error => {
                    console.log(JSON.stringify(error));
                    maincomInstance.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error updating record',
                            message: error.body.message + ' \nStatus: ' + error.statusText,
                            variant: 'error'
                        })
                    );
                });
};

export { updateRecordWithToast };


