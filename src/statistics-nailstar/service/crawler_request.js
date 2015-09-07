var request = require('request');

var cookie = "um_lang=zh; pgv_si=s1239066624; pgv_pvi=4111035464; pgv_info=ssi=s4772427298; _ga=GA1.2.190269620.1431085756; rack.session=BAh7ByIPc2Vzc2lvbl9pZCJFOTI4YTQyNjM4MjhkNDQ4NzI3OWYzN2E2YmM5%0AYzg2MGQzMGJmODllZjNiMmY4OWVjM2NkZjQyNDdhMGJkYzRjNyINdHJhY2tp%0Abmd7CCIZSFRUUF9BQ0NFUFRfRU5DT0RJTkciLWFlOThiOTQxMGM3YjIyZjBi%0AY2I3ZjBlOTE3MGM5YWE4NmM1OWFmNDYiGUhUVFBfQUNDRVBUX0xBTkdVQUdF%0AIi1kMTcxYzQ1NGIzZGUyNDdhNGUyNmFjMGIzNjU2YzdkYTIxNDk1MmZjIhRI%0AVFRQX1VTRVJfQUdFTlQiLTZlZmY5NTE3YzEwMDVmMWIzM2Q4MmQ5MTI1ZDkz%0ANDgxNjdkMGJkNDE%3D%0A--c9c6949f304a5e3f4abe9226b49112d7e664944f; umlid_551282cffd98c520ad000470=20150906; umuk=538ac20e1c8e419b088e06a9cb07b42b; umeng_ss=BAh7D0kiGGNhc19zZW50X3RvX2dhdGV3YXkGOgZFRlRJIh9jYXNfdmFsaWRhdGlvbl9yZXRyeV9jb3VudAY7AEZpAEkiHXByZXZpb3VzX3JlZGlyZWN0X3RvX2NhcwY7AEZJdToJVGltZQ3H4ByAQ3c4kAo6DW5hbm9fbnVtaQJbAzoNbmFub19kZW5pBjoNc3VibWljcm8iB4WQOgtvZmZzZXRpAoBwOgl6b25lSSIIQ1NUBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMVFEaXNDMGowd3h6UjNqdy9QbVBCL1ZiQzlUMmdRWmcwUXFHWE5jdFdkRUk9BjsARkkiDWNhc191c2VyBjsARkkiHXNoZW5nZG9uZy56aGVuQHlpbG9zLmNvbQY7AFRJIhljYXNfZXh0cmFfYXR0cmlidXRlcwY7AEZDOi1BY3RpdmVTdXBwb3J0OjpIYXNoV2l0aEluZGlmZmVyZW50QWNjZXNzewhJIgdpZAY7AFRJIh01NTEyODJjZmZkOThjNTIwYWQwMDA0NzAGOwBUSSIJbmFtZQY7AFRJIh1zaGVuZ2RvbmcuemhlbkB5aWxvcy5jb20GOwBUSSIKZW1haWwGOwBUSSIdc2hlbmdkb25nLnpoZW5AeWlsb3MuY29tBjsAVEkiEmNhc2ZpbHRlcnVzZXIGOwBGSSIdc2hlbmdkb25nLnpoZW5AeWlsb3MuY29tBjsAVEkiGmNhc19sYXN0X3ZhbGlkX3RpY2tldAY7AEZvOh1DQVNDbGllbnQ6OlNlcnZpY2VUaWNrZXQOOgxAdGlja2V0SSIlU1QtMTQ0MTUyNDk2M3I2eDFKNm9Wb3Y4d1VtYlJzTUYGOwBUOg1Ac2VydmljZUkiGmh0dHA6Ly93d3cudW1lbmcuY29tLwY7AFQ6C0ByZW5ldzA6CkB1c2VyQBk6FkBleHRyYV9hdHRyaWJ1dGVzewhJIgdpZAY7AFRAE0kiCW5hbWUGOwBUQBVJIgplbWFpbAY7AFRAFzoNQHBndF9pb3UwOg1Ac3VjY2Vzc1Q6EkBmYWlsdXJlX2NvZGUwOhVAZmFpbHVyZV9tZXNzYWdlMEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjsAVFsISSIJVXNlcgY7AEZbBm86E0JTT046Ok9iamVjdElkBjoKQGRhdGFbEWlaaRdpAYJpAc9pAf1pAZhpAcVpJWkBrWkAaQlpdUkiGWpmdUF3eTZDcVVJNlliSnJpYVROBjsAVEkiD3Nlc3Npb25faWQGOwBUSSIlNmZiYjJiOGJjOGEwYjZiMWEwMTdjMTA5NmEyZDEzOWEGOwBG--beaaa824be2d2bcc4d8dec957264e79a6e4c1556; __utmt=1; CNZZDATA1253424029=308216070-1431081270-%7C1441526585; __utma=155879487.190269620.1431085756.1441524908.1441527453.20; __utmb=155879487.2.9.1441527459900; __utmc=155879487; __utmz=155879487.1431670953.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic";

exports.get = get;

function get(url, callback){

    var options = {
        url: url,
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36",
            "Cookie": cookie
        },
        timeout: 5000
    };

    request.get(options, callback);
}