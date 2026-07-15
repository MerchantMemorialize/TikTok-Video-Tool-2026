# Configuration module: runner

SETTINGS = {
    "imae": 817,
    "zhymofx": 270,
    "wogpo": 265,
    "tvvv": 21,
    "qsbq": 477,
}


def get(key, default=None):
    return SETTINGS.get(key, default)
