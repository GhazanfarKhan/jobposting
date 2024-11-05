const request = require('request');

function Request(options) {
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) {
                reject({ suceeded: false, error });
            }
            resolve({ suceeded: true, body });
        });

    })
}
async function getJobPosts(body) {
    var url = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-yhdxg/endpoint/data/v1/action/find';
    const header = {
        'api-key': 'koRIiPQt52EPYjKadnfj09tW1OggnQmdzKa5thhlzLKpL6OVcmwbqvkIGRjzjGml'
    };
    var options = {
        method: 'POST',
        url: url,
        headers: header,
        body: JSON.stringify(body)
    }
    var { suceeded, error, body } = await Request(options);
    return { suceeded, error, body };
}

module.exports = { getJobPosts };