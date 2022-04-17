const data = [
    {
        id: 1,
        author_name: "Sandeep Hodkasia",
        author_link: "https://hackerone.com/sandeep_hodkasia",
        writeup_link: "https://hackerone.com/reports/314808",
        writeup_name: "Full Account Takeover",
        bug_name: "OAuth Flow",
        bug_link: "https://developers.facebook.com/docs/facebook-login/security",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 2,
        author_name: "Abdellah Yaala",
        author_link: "https://medium.com/@yaala",
        writeup_link: "https://medium.com/@yaala/trim-private-live-videos-and-access-them-a331447cc82a",
        writeup_name: "Trim Private Live Videos",
        bug_name: "GraphQL Issue",
        bug_link: "https://fauna.com/blog/best-practices-testing-graphql-apis",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 3,
        author_name: "Alex Birsan",
        author_link: "https://medium.com/@alex.birsan",
        writeup_link: "https://medium.com/@alex.birsan/the-bug-that-exposed-your-paypal-password-539fc2896da9",
        writeup_name: "Exposed Paypal Password",
        bug_name: "CSRF and XSSI",
        bug_link: "https://portswigger.net/web-security/csrf/tokens",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 4,
        author_name: "Mosec",
        author_link: "https://medium.com/@moSec",
        writeup_link: "https://medium.com/@moSec/how-i-hacked-thousand-of-subdomains-6aa43b92282c",
        writeup_name: "How I Hacked Thousands of Subdomains",
        bug_name: "Subdomain Takeover",
        bug_link: "https://www.hackerone.com/application-security/guide-subdomain-takeovers",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 5,
        author_name: "Abhubaker Moh",
        author_link: "https://hackerone.com/mester_x",
        writeup_link: "https://hackerone.com/reports/1421804",
        writeup_name: "Direct Access To Admin Dashboard",
        bug_name: "Privilege Escalation",
        bug_link: "https://attack.mitre.org/tactics/TA0004/",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 6,
        author_name: "Ananda Dhakal",
        author_link: "https://twitter.com/dhakal_ananda",
        writeup_link: "https://infosecwriteups.com/how-i-was-able-to-bypass-otp-token-requirement-in-razer-the-story-of-a-critical-bug-fc63a94ad572?s=09&gi=10a6dbd15cd",
        writeup_name: "Bypassed OTP code requirement in Razer",
        bug_name: "2FA Bypass",
        bug_link: "https://book.hacktricks.xyz/pentesting-web/2fa-bypass",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 7,
        author_name: "Tushar Sharma",
        author_link: "https://medium.com/@tushar.tilak.sharma",
        writeup_link: "https://medium.com/techiepedia/p5-to-p1-intresting-account-takeover-6e59b879494b",
        writeup_name: "Bypassed OTP code requirement in Razer",
        bug_name: "Stored XSS",
        bug_link: "https://portswigger.net/web-security/cross-site-scripting/stored",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 8,
        author_name: "Abdullah Mudzakir",
        author_link: "https://dzakir.medium.com",
        writeup_link: "https://dzakir.medium.com/how-to-get-500-via-source-code-exposed-16fca67af465",
        writeup_name: "How I get $500 via Source Code Exposed",
        bug_name: "Sensitive Data Exposure",
        bug_link: "https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 9,
        author_name: "Kalpesh Makwana",
        author_link: "https://www.facebook.com/makwanakalpeshh/",
        writeup_link: "https://hackerone.com/reports/204703",
        writeup_name: "CSRF to change password",
        bug_name: "CSRF",
        bug_link: "https://owasp.org/www-community/attacks/csrf",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 10,
        author_name: "Inderjeet Singh",
        author_link: "https://twitter.com/3nc0d3dGuY",
        writeup_link: "https://rashahacks.medium.com/duplicate-on-csrf-account-takeover-9784af23ec13",
        writeup_name: "Duplicate on CSRF --> Account takeover",
        bug_name: "CSRF",
        bug_link: "https://owasp.org/www-community/attacks/csrf",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 11,
        author_name: "Ian Carroll",
        author_link: "https://twitter.com/iangcarroll",
        writeup_link: "https://hackerone.com/reports/1406335",
        writeup_name: "Subdomain takeover of images.crossinstall.com",
        bug_name: "Subdomain Takeover",
        bug_link: "https://0xpatrik.com/subdomain-takeover-basics/",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 12,
        author_name: "Aashiq Ahamed N",
        author_link: "https://www.linkedin.com/in/aashiq-ahamed-n-39ab0a157/",
        writeup_link: "https://bugcrowd.com/disclosures/1f0205ac-3eb1-45c8-a777-a27b10e66bd5/sensitive-data-exposure-user-personal-details",
        writeup_name: "Sensitive Data Exposure (User Personal Details)",
        bug_name: "PII Exposure",
        bug_link: "https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure",
        source_link: "https://bugcrowd.com/crowdstream",
        source_name: "Bugcrowd"
    },
    {
        id: 13,
        author_name: "Inderjeet Singh",
        author_link: "https://twitter.com/3nc0d3dGuY",
        writeup_link: "https://encodedguy.medium.com/600-for-idor-file-or-folder-download-243166452dad",
        writeup_name: "$600 for IDOR (File or Folder Download)",
        bug_name: "IDOR",
        bug_link: "https://portswigger.net/web-security/access-control/idor",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 14,
        author_name: "Youstin",
        author_link: "https://twitter.com/iustinbb",
        writeup_link: "https://hackerone.com/reports/1173153",
        writeup_name: "Cache Poisoning DoS on downloads.exodus.com",
        bug_name: "Cache Poisoning",
        bug_link: "https://portswigger.net/web-security/web-cache-poisoning",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 15,
        author_name: "Sayaan Alam",
        author_link: "https://medium.com/@sayaanalam",
        writeup_link: "https://medium.com/techfenix/ssrf-server-side-request-forgery-worth-4913-my-highest-bounty-ever-7d733bb368cb",
        writeup_name: "SSRF (Server Side Request Forgery) worth $4,913",
        bug_name: "SSRF",
        bug_link: "https://portswigger.net/web-security/ssrf",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 16,
        author_name: "Prashant Bhatkal",
        author_link: "#",
        writeup_link: "https://prashantbhatkal2000.medium.com/svg-based-stored-xss-ee6e9b240dee",
        writeup_name: "SVG Based Stored XSS",
        bug_name: "XSS",
        bug_link: "https://owasp.org/www-community/attacks/xss/",
        source_link: "https://medium.com",
        source_name: "Medium"
    },
    {
        id: 17,
        author_name: "Lauritz",
        author_link: "https://twitter.com/_lauritz_",
        writeup_link: "https://hackerone.com/reports/1342088",
        writeup_name: "Flickr Account Takeover using AWS Cognito API",
        bug_name: "Account Takeover",
        bug_link: "https://owasp.org/www-pdf-archive/API_Security_Top_10_RC_-_Global_AppSec_AMS.pdf",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 18,
        author_name: "Vladimir Volfovich",
        author_link: "https://hackerone.com/zhirinovskiy",
        writeup_link: "https://hackerone.com/reports/1439026",
        writeup_name: "Discoverability by Phone Number/Email",
        bug_name: "Username Enumeration",
        bug_link: "https://www.rapid7.com/blog/post/2017/06/15/about-user-enumeration/",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 19,
        author_name: "trieulieuf9",
        author_link: "https://hackerone.com/trieulieuf9?type=user",
        writeup_link: "https://hackerone.com/reports/1423704",
        writeup_name: "Detect if user is FetLife supporter",
        bug_name: "Response Manipulation",
        bug_link: "rashahacks.com",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 20,
        author_name: "Souhaib Naceri",
        author_link: "https://hackerone.com/h4x0r_dz?type=user",
        writeup_link: "https://hackerone.com/reports/1122513",
        writeup_name: "Stored XSS devicelock.com/forum/",
        bug_name: "Stored XSS",
        bug_link: "https://portswigger.net/web-security/cross-site-scripting/stored",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 21,
        author_name: "Ron Chan",
        author_link: "https://hackerone.com/ngalog",
        writeup_link: "https://hackerone.com/reports/1102546",
        writeup_name: "Publicly Listed Google Bucket",
        bug_name: "Sensitive Data Exposure",
        bug_link: "https://www.acunetix.com/blog/web-security-zone/sensitive-data-exposure/",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 22,
        author_name: "Danish",
        author_link: "https://hackerone.com/danishalkatiri",
        writeup_link: "https://hackerone.com/reports/1092831",
        writeup_name: "Password Reset Token Leak",
        bug_name: "Sensitive Key Leak",
        bug_link: "rashahacks.com",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 23,
        author_name: "Rohan Devikar",
        author_link: "https://hackerone.com/blackfly_",
        writeup_link: "https://hackerone.com/reports/1411363",
        writeup_name: "No Length on Password",
        bug_name: "Long Password DOS",
        bug_link: "https://github.com/fnando/password_strength/issues/27",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 24,
        author_name: "Misa G.",
        author_link: "https://hackerone.com/bepresent?type=user",
        writeup_link: "https://hackerone.com/reports/1410459",
        writeup_name: "Reflected XSS *.shopifycloud.com",
        bug_name: "Reflected XSS",
        bug_link: "https://portswigger.net/web-security/cross-site-scripting/reflected",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    },
    {
        id: 25,
        author_name: "Dhivish Varshan",
        author_link: "https://hackerone.com/official_dhivish?type=user",
        writeup_link: "https://hackerone.com/reports/1348504",
        writeup_name: "Subdomain Takeover",
        bug_name: "Subdomain Takeover",
        bug_link: "https://www.hackerone.com/application-security/guide-subdomain-takeovers",
        source_link: "https://hackerone.com/hacktivity",
        source_name: "Hackerone"
    }
]

export default data;