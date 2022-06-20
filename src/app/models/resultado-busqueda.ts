import { Usuario } from './usuario';

export class ResultadoBusqueda {
  page = 0;
  per_page = 0;
  total = 0;
  total_pages = 0;
  data: Usuario[] = [];
}
