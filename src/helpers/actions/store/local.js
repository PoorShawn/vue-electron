import profileStore from '@/stores/profile.js';
import { snakeCase, camelCase } from "change-case";

const stores = {
    profile: profileStore,
}

function getAction ({name, key}) {
    const store = stores[name];

    if (store) {
        const keyFormatted = snakeCase(key);
        const actionName = camelCase(`set-${keyFormatted}`);

        return store()[actionName];
    }
}

function callAction ({name, key, value}) {
    const action = getAction({name, key});

    if (action) {
        action(value);
    }
}

export function update(nameWithKey, value) {
    const [name, key] = nameWithKey.split('.');

    callAction({name, key, value});
}
