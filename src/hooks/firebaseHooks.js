import { useAuth } from '../contexts/AuthContext';
import { db } from '../config/firebase';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const useFirebaseQuery = () => {
    const { currentUser } = useAuth();

    // Query key
    const queryKey = ['firebaseQuery', 'users']; // 'users' collection name

    // Query function
    const queryFn = async () => {
        if (!currentUser) {
            // User is not logged in, throw error
            throw new Error('User is not logged in');
        }

        // Retrieve the document
        console.log('Getting user data from database');
        const docSnapshot = await getDoc(doc(db, 'users', currentUser.uid));
        return docSnapshot.data();
    };

    // Query options
    const queryOptions = {
        staleTime: 50000,
    };

    // Get result
    const queryResult = useQuery(queryKey, queryFn, queryOptions);

    return queryResult;
};

export const useFirebaseUpdateWithQuery = () => {
    const { currentUser } = useAuth();
    const queryClient = useQueryClient();

    const updateMutation = useMutation(async ({attribute, values}) => {
        const docRef = doc(db, 'users', currentUser.uid);

        // Format document dictionary
        var docDict = {};
        docDict[attribute] = values; // Append to the attribute list

        // Update attribute of document
        console.log('Updating: ', attribute)
        await updateDoc(docRef, docDict);
    }, {
        onSuccess: () => {
            console.log('Success!');
            queryClient.invalidateQueries({ queryKey: ["firebaseQuery"] });
        },
    });

    return { update: updateMutation.mutateAsync, isLoading: updateMutation.isLoading, isError: updateMutation.isError };
};