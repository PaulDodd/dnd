import urllib.request
import html5lib as html
import bs4 as bs
# soup = BeautifulSoup(html_doc, 'html.parser')

def _fetch(url):
    try:
        data = urllib.request.urlopen(url)
        return data.read();
    except e:
        raise(e)
    return data.read();

def _parse(htmldoc):
    soup = bs.BeautifulSoup(htmldoc, 'html.parser')
    divs = soup.find_all('div');
    for div in divs:
        if div.get_text() == "Core Classes":
            print(div.get_text())
            links = div.find_all('a');
            for link in links:
                print(link.get('href'))




if __name__ == '__main__':
    print("fetching data from: http://www.d20pfsrd.com/classes");
    _parse(_fetch("http://www.d20pfsrd.com/classes"));
