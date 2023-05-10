import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleUserPin } from '../../../api/userpinsData';
import PinForm from '../../../components/Forms/PinForm';

export default function EditSavedPin() {
  const [editSavedPin, setEditSavedPin] = useState();
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleUserPin(firebaseKey).then(setEditSavedPin);
  }, [firebaseKey]);
  return (<PinForm pinObj={editSavedPin} />);
}
