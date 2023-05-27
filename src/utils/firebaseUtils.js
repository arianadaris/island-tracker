import { db } from '../config/firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';


// Attribute Functions
export const updateAttribute = async (userId, attribute, attributeValues) => {
    try {
        const docRef = doc(db, 'users', userId);

        var docDict = {};
        docDict[attribute] = attributeValues;

        // Update attribute of document
        await updateDoc(docRef, docDict);

        console.log(`Document attribute ${attribute} updated successfully`);
    }
    catch (error) {
        console.log('Error updating document attribute:', error);
    }
}

export const getAttribute = async (userId, attribute) => {
    try {
        // Retrieve the document
        const docSnapshot = await getDoc(doc(db, 'users', userId));

        // Extract the specific attribute from the document data
        const attributeValue = docSnapshot.data()[attribute];

        return attributeValue;
    }
    catch (error) {
        console.log('Error retrieving tasks:', error);
        return null;
    }
}