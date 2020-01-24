import {WSnackBar} from 'react-native-smart-tip';
import axios from 'axios';

const PointerApi = {
    axios
    .post(`${config.API_URL}/pointers`, chapterData, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(res => {
      this.setState({
        isLoading: false,
        dataSource: [...res.data.success],
      });
    })
    .catch(err => {
      const snackBarOpts = {
        data: 'Please check the network first.',
        position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
        duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
        textColor: '#ff490b',
        backgroundColor: '#050405',
        actionText: 'close',
        actionTextColor: 'white',
        actionClick: () => {
          // Click Action
        },
      };
      WSnackBar.show(snackBarOpts);
    });
}