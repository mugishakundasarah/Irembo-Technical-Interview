import axios from 'axios';
export class LocationService {
    private options = {
        method: 'GET',
        url: 'https://rwanda.p.rapidapi.com/provinces',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'rwanda.p.rapidapi.com'
        }
      };
    LocationService() {}

    async getProvinces() {
        let response = await axios.post('https://mis.goodlinksolutions.rw/action/request_districts', )
    }

    async getDistricts(province:any) {
        let response = await axios.post('https://mis.goodlinksolutions.rw/action/request_districts_api', province)
        return response.data.data
    }

    async getSectors(district:any) {
        let response = await axios.post('https://mis.goodlinksolutions.rw/action/request_sectors_api', district)
        return response.data.data
    }

    async getCells(sector:any) {
        let response = await axios.post('https://mis.goodlinksolutions.rw/action/request_cells_api', sector)
        return response.data.data
    }

    async getVillages(cell:any) {
        let response = await axios.post('https://mis.goodlinksolutions.rw/action/request_villages_api', cell)
        return response.data.data
    }

}
