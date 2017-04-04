import Immutable from 'immutable';

export const GalleryState = Immutable.fromJS({
  'configData': {},
  'selected': {
    cat: '',
    proj: '',
    page: '',
    url: ''
  }
});