const express = require('express')
const app = express()
const port = 3000


const medooze = require('medooze-media-server');
const SemanticSDP = require('semantic-sdp');

medooze.enableLog(false);
medooze.enableDebug(false);
medooze.enableUltraDebug(false);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);
app.get('/status', () => {
    
}, statusMonitor.pageRoute);

setInterval(() => {
    
    for (let i = 0; i < 100; i++) {
        const endpoint = medooze.createEndpoint('0.0.0.0');

        const sdp = "v=0\n" +
            "o=- 3566456756525160601 2 IN IP4 127.0.0.1\n" +
            "s=-\n" +
            "t=0 0\n" +
            "a=group:BUNDLE 0\n" +
            "a=msid-semantic: WMS 3YJldR0SHY34Zl1PaPgj8JRTZoXMCXN0A7EK\n" +
            "m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\n" +
            "c=IN IP4 0.0.0.0\n" +
            "a=rtcp:9 IN IP4 0.0.0.0\n" +
            "a=ice-ufrag:8rr7\n" +
            "a=ice-pwd:m/t/xhTvzHwdgbYnaHL2zquH\n" +
            "a=ice-options:trickle\n" +
            "a=fingerprint:sha-256 D2:9B:28:70:DF:B5:73:89:3C:65:9A:75:77:74:FF:3E:2C:B9:7B:82:17:49:12:D0:EC:1F:BC:99:88:7D:F9:92\n" +
            "a=setup:actpass\n" +
            "a=mid:0\n" +
            "a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\n" +
            "a=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\n" +
            "a=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\n" +
            "a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\n" +
            "a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\n" +
            "a=sendonly\n" +
            "a=msid:3YJldR0SHY34Zl1PaPgj8JRTZoXMCXN0A7EK 17afa54f-82de-4aab-b8f1-73d9fc8e720c\n" +
            "a=rtcp-mux\n" +
            "a=rtpmap:111 opus/48000/2\n" +
            "a=rtcp-fb:111 transport-cc\n" +
            "a=fmtp:111 minptime=10;useinbandfec=1\n" +
            "a=rtpmap:103 ISAC/16000\n" +
            "a=rtpmap:104 ISAC/32000\n" +
            "a=rtpmap:9 G722/8000\n" +
            "a=rtpmap:0 PCMU/8000\n" +
            "a=rtpmap:8 PCMA/8000\n" +
            "a=rtpmap:106 CN/32000\n" +
            "a=rtpmap:105 CN/16000\n" +
            "a=rtpmap:13 CN/8000\n" +
            "a=rtpmap:110 telephone-event/48000\n" +
            "a=rtpmap:112 telephone-event/32000\n" +
            "a=rtpmap:113 telephone-event/16000\n" +
            "a=rtpmap:126 telephone-event/8000\n" +
            "a=ssrc:319074905 cname:GLlzpu7xvyzEV4od\n" +
            "a=ssrc:319074905 msid:3YJldR0SHY34Zl1PaPgj8JRTZoXMCXN0A7EK 17afa54f-82de-4aab-b8f1-73d9fc8e720c\n" +
            "a=ssrc:319074905 mslabel:3YJldR0SHY34Zl1PaPgj8JRTZoXMCXN0A7EK\n" +
            "a=ssrc:319074905 label:17afa54f-82de-4aab-b8f1-73d9fc8e720c";

        const offer = SemanticSDP.SDPInfo.parse(sdp);
        const transport = endpoint.createTransport(offer);
        transport.stop();

        endpoint.stop();
    }
    
}, 100);
setInterval(() => {
    const memoryUsage = process.memoryUsage();
    console.log(`RSS: ${(memoryUsage.rss / 1000 / 1000).toFixed(2)} MB`);
    console.log(`Heap Total: ${(memoryUsage.heapTotal / 1000 / 1000).toFixed(2)} MB`);
    console.log(`Heap Used:  ${(memoryUsage.heapUsed / 1000 / 1000).toFixed(2)} MB`);
    console.log("------------------")

}, 10 * 1000);
