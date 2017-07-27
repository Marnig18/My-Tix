import React from 'react'

import EditEventModal from './editEvent'

const ModalConductor = props => {
	 
	  switch (props.currentModal) {
    	case 'Edit_Event':
      return <ExportDataModal {...props}/>;

