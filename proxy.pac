function FindProxyForURL(url, host)
{
    if ( dnsDomainIs(host, "divan.tv") || dnsDomainIs(host, "whatismyipaddress.com") ) {
        return "SOCKS4 193.106.58.51:4153";
    } else {
        return "DIRECT";
    }
}

