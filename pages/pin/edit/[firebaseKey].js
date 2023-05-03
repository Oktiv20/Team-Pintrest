import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleUserPin } from '../../../api/userpinsData';
import PinForm from '../../../components/Forms/PinForm';

export default function EditPin() {
  const [editPin, setEditPin] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleUserPin(firebaseKey).then(setEditPin);
  }, [firebaseKey]);
  return (<PinForm obj={editPin} />);
}
