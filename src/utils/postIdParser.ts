const prefixs = ['line://', 'https://', 'http://', '//', '://'];

// PREFIX PARSER: TO URL
// PATH PARSER: TO PATH
// SLUG PARSER: TO POST ID

function prefixParser(url: string): string {
    for (const prefix of prefixs) {
        url = url.replaceAll(prefix, '');
    }

    if (/$.*:\/\//.test(url)) {
        url = url.replaceAll(/$.*:\/\//, '');
    }

    url = `https://wip.${url}`;

	return url;
}

function pathParser(url: string): string {
    url = url.trim().replaceAll(' ', '');
    return new URL(url).pathname;    
}

function slugParser(url: string): string {
    url = url.trim().replaceAll(' ', '');
    const endSlashSlicer = (url: string): string => {
        if (url.endsWith('/')) {
            if (url.endsWith('/')) {
                return endSlashSlicer(url.slice(0, -1));
            }
            return url.slice(0, -1);
        } else {
            return url;
        }
    };

    return endSlashSlicer(url).trim().split('/').pop() || '';
}

export function postIdParser(url: string): string | false {
	url = prefixParser(url.trim().replaceAll(' ', ''));

    try {
        url = pathParser(url);
    }catch (_error) {
        url = `/ese/${slugParser(url)}`;
    }

    url = slugParser(url);

	return url.split(".").pop() ?? false;
}
