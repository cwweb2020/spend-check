import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from 'firebase/firestore/lite';

// CREATE
//Esta función recibe el objeto que quiero agregar como nuevo documento de mi colección y como segundo parámetro el nombre de mi colección a la que agregaré el nuevo documento.
export const createItem = async (db, obj, nameCollection) => {
  try {
    const colRef = collection(db, nameCollection);
    const data = await addDoc(colRef, obj);
    return data.id;
  } catch (error) {
    console.log(error);
  }
};

// UPDATE
export const updateItem = async (db, id, obj, nameCollection) => {
  const colRef = collection(db, nameCollection);
  await updateDoc(doc(colRef, id), obj);
};

// READ
//Esta función recibe por parámetro el nombre de la colección que quiero traer desde firestore y devuelve un array con mis productos incluyendo el id de cada documento.
export const getItems = async (db, nameCollection) => {
  const colRef = collection(db, nameCollection);
  const result = await getDocs(query(colRef));
  return result;
  // return getArrayFromCollection(result);
};

// DELETE
//Esta función elimina un documento de firebase, se usaría por ejemplo para anular una escritura en firebase como la de una orden de compra. Por cierto, las eliminaciones en firebase también son costosas $$$ ya que están restringidas.
export const deleteItem = async (db, id, nameCollection) => {
  const colRef = collection(db, nameCollection);
  await deleteDoc(doc(colRef, id));
};
