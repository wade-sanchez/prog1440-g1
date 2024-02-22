import React from 'react'
import { SitesButtons } from '../components/SitesButtons'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
export const RemoveSites = () => {
  return (
    <div className="wrapper">
        <div><h1>Delete Sites</h1></div>
        <div>
           <SitesButtons/>
           <select multiple>
            <option value="Test1">
              {/* <input type="checkbox">Test1</input> */}
              Test1
            </option>
            <option>
            {/* <input type="checkbox">Test2</input> */}
            </option>
            <option>
            {/* <input type="checkbox">Test3</input> */}
            </option>
            </select>
          <button>Delete Sites</button>
          {/* will ask for confirmation, are you sure you want to delete? */}
          <ul role="listbox" tabindex="0" aria-label="email list">
      <li tabindex="-1" role="option" aria-selected="false" aria-checked="false">
        <div class="form-check mb-0">
          <input tabindex="-1" id="check1" class="form-check-input" type="checkbox"/><label for="check1" class="form-check-label"></label>
          Important information about your account
        </div>
      </li>
      ...
  </ul>
        </div>
        <ReturnToStaffMenu/>
    </div>
  )
}