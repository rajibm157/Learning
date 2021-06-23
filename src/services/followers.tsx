import Api from 'api';
import {Alert} from 'react-native';

export async function getFollowers() {
  let result: any = [];
  let error: any = null;
  try {
    let res: any = await Api.get('followers');
    if (res.success === false) {
      error = res.messege;
    } else {
      result = res;
    }
  } catch (e: any) {
    error = e;
    Alert.alert('Error', 'Network Error');
  }
  return {result, error};
}
