import { useState, useEffect } from 'react';
import EyeIcon from './eye-regular.svg';

import {
    Wrapper,
    useUiExtension,
    FieldExtensionType,
    FieldExtensionFeature
} from '@graphcms/uix-react-sdk'

const PreviewUrl = () => {
    const { isTableCell, extension, form: { getFieldState } } = useUiExtension();
    const [ slug, setSlug ] = useState('');

    useEffect(() => {
        getFieldState('slug').then((state) => {
            setSlug(state.value)
        });
    }, [getFieldState, setSlug]);
    
    const previewUrl = extension.config.PREVIEW_URL + slug;

    if (isTableCell) {
        return (
            <>
                <div style={{
                    position: 'relative', top: '20px', height: '60px', width: '60px',
                }}>
                    <a href={previewUrl} target={`_blank`} style={{
                        padding: '1em'
                    }}>
                        <img src={EyeIcon} alt='Preview' width={19} />
                    </a>
                </div>
            </>
        );
    }

    return (
        <><a style={{textDecoration: 'none', color: 'blue'}} href={previewUrl} target={`_blank`}>Click to Open</a></>
    );
};

const declaration = {
    extensionType: 'field',
    fieldType: FieldExtensionType.STRING,
    features: [
        FieldExtensionFeature.FieldRenderer
    ],
    name: 'Preview URL',
    config: {
        PREVIEW_URL: {
            type: 'string',
            displayName: 'Preview URL',
            description: 'Your website base URL',
            required: true,
        },
    }
};

const PreviewUrlExtension = () => {
    return (
        <Wrapper declaration={declaration}>
            <PreviewUrl />
        </Wrapper>
    )
}

export default PreviewUrlExtension;