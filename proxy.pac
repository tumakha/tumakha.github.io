function FindProxyForURL(url, host)
{
    if ( host == "api2.divan.tv" ) {
        return "SOCKS4 193.106.58.51:4153";
    } else {
        return "DIRECT";
    }
}

