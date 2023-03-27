import React from 'react';
import style from './style.module.css';

const InputFormEdit = ({ title, type, name, placeholder, value, onchange }) => {
  function choiceType(type) {
    switch (type) {
      case 'textarea':
        return (
          <div className={`item mb-5`} id="thumbnail">
            <label for={name} className="text-secondary form-label">
              {title}
            </label>
            <textarea className={`form-control ${style.inputTextArea}`} name={name} value={value} id="thumbnail" rows="3" placeholder={placeholder} onChange={onchange}></textarea>
          </div>
        );
      case 'text':
        return (
          <div className={`item my-4`} id="thumbnail">
            <label for="thumbnail " className="form-label text-secondary">
              {title}
            </label>
            <input type={type} name={name} className={`form-control ${style.inputForm}`} value={value} id="thumbnail" placeholder={placeholder} onChange={onchange} />
          </div>
        );
      case 'file':
        return (
          <div className={`item my-4`} id="thumbnail">
            <label for="thumbnail " className="form-label text-secondary">
              {title}
            </label>
            <input type={type} name={name} className={`form-control ${style.inputForm}`} value={value} id="thumbnail" placeholder={placeholder} onChange={onchange} />
          </div>
        );
      case 'no-title':
        return (
          <div className={`item my-4`} id="thumbnail">
            <input type={type} name={name} className={`form-control ${style.inputForm}`} value={value} id="thumbnail" placeholder={placeholder} onChange={onchange} />
          </div>
        );
    }
  }

  return choiceType(type);
};

export default InputFormEdit;
