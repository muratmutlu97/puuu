import metrics from '../../metrics';


export default {
    async login(body) {
        try {
            const fetchResult = fetch(`${metrics.URL}/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)

            })
            const response = await fetchResult;

            return response.json();
        } catch (e) {
            console.warn(e);

        }
    },
    async checkToken(body) {
        try {
            const fetchResult = fetch(`${metrics.URL}/checkToken`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)

            })
            const response = await fetchResult;

            return response.json();
        } catch (e) {
            console.warn(e);

        }
    }
}