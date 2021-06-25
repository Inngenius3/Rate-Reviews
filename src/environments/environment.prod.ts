
import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  apiUrl: 'http://dms.inngenius.com:81/api/',
  // backendURL: 'http://174.99.229.165:8082/api/',
  backendURL: 'http://dms.inngenius.com:81/api/',
  // taskDocumentPath: 'http://localhost:58602/public/task_document',
  taskDocumentPath: 'http://dms.inngenius.com:81/public/task_document/',
  imageURL: 'http://dms.inngenius.com:81/',
  headers: new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
  })
};
