import Sun from '../assets/Sun.svg';
import PartlyCloudy from '../assets/Partly-Cloudy.svg';
import Cloud from '../assets/Cloud.svg';
import Fog from '../assets/Fog.svg';
import Rain from '../assets/Rain.svg';
import ThunderStorm from '../assets/Thunder-Storm.svg';
import Snow from '../assets/Snow.svg';
import Moon from '../assets/Moon.svg';
import PartlyCloudMoon from '../assets/Partly-Cloudy-Moon.svg';

const iconPicker = (iconId) => {

    switch(iconId) {
        case 1: case 2:
            return Sun;
        case 3: case 4: case 5:
            return PartlyCloudy;
        case 6: case 7: case 8:
            return Cloud;
        case 11:
            return Fog;
        case 12: case 13: case 14: case 18: case 39: case 40:
            return Rain;
        case 15: case 16: case 17: case 41: case 42:
            return ThunderStorm
        case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26:
        case 27: case 28: case 29: case 43: case 44:
            return Snow
        case 33: case 34:
            return Moon
        case 35: case 36: case 37: case 38:
            return PartlyCloudMoon
        default:
            return Sun
    }

}

export default iconPicker