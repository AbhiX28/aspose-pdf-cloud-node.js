 /**
 *
 *   Copyright (c) 2018 Aspose.PDF Cloud
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import { AntialiasingProcessingType } from "../models/antialiasingProcessingType";
import { AppendDocument } from "../models/appendDocument";
import { Color } from "../models/color";
import { ColorDepth } from "../models/colorDepth";
import { CompressionType } from "../models/compressionType";
import { DocFormat } from "../models/docFormat";
import { DocRecognitionMode } from "../models/docRecognitionMode";
import { DocumentPrivilege } from "../models/documentPrivilege";
import { EpubRecognitionMode } from "../models/epubRecognitionMode";
import { FieldType } from "../models/fieldType";
import { FontEncodingRules } from "../models/fontEncodingRules";
import { FontSavingModes } from "../models/fontSavingModes";
import { FontStyles } from "../models/fontStyles";
import { HorizontalAlignment } from "../models/horizontalAlignment";
import { HtmlDocumentType } from "../models/htmlDocumentType";
import { HtmlMarkupGenerationModes } from "../models/htmlMarkupGenerationModes";
import { HttpStatusCode } from "../models/httpStatusCode";
import { ImageSrcType } from "../models/imageSrcType";
import { ImageTemplate } from "../models/imageTemplate";
import { ImageTemplatesRequest } from "../models/imageTemplatesRequest";
import { ImagesListRequest } from "../models/imagesListRequest";
import { LettersPositioningMethods } from "../models/lettersPositioningMethods";
import { LineSpacing } from "../models/lineSpacing";
import { Link } from "../models/link";
import { LinkActionType } from "../models/linkActionType";
import { LinkElement } from "../models/linkElement";
import { LinkHighlightingMode } from "../models/linkHighlightingMode";
import { MarginInfo } from "../models/marginInfo";
import { MergeDocuments } from "../models/mergeDocuments";
import { OptimizeOptions } from "../models/optimizeOptions";
import { PageWordCount } from "../models/pageWordCount";
import { Paragraph } from "../models/paragraph";
import { PartsEmbeddingModes } from "../models/partsEmbeddingModes";
import { PdfAType } from "../models/pdfAType";
import { RasterImagesSavingModes } from "../models/rasterImagesSavingModes";
import { Rectangle } from "../models/rectangle";
import { Rotation } from "../models/rotation";
import { SaaSposeResponse } from "../models/saaSposeResponse";
import { Segment } from "../models/segment";
import { ShapeType } from "../models/shapeType";
import { Signature } from "../models/signature";
import { SignatureType } from "../models/signatureType";
import { SplitResult } from "../models/splitResult";
import { Stamp } from "../models/stamp";
import { StampType } from "../models/stampType";
import { TextHorizontalAlignment } from "../models/textHorizontalAlignment";
import { TextLine } from "../models/textLine";
import { TextRect } from "../models/textRect";
import { TextRects } from "../models/textRects";
import { TextReplace } from "../models/textReplace";
import { TextReplaceListRequest } from "../models/textReplaceListRequest";
import { TextState } from "../models/textState";
import { TiffExportOptions } from "../models/tiffExportOptions";
import { VerticalAlignment } from "../models/verticalAlignment";
import { WordCount } from "../models/wordCount";
import { WrapMode } from "../models/wrapMode";
import { Annotation } from "../models/annotation";
import { AnnotationResponse } from "../models/annotationResponse";
import { Annotations } from "../models/annotations";
import { AnnotationsResponse } from "../models/annotationsResponse";
import { Attachment } from "../models/attachment";
import { AttachmentResponse } from "../models/attachmentResponse";
import { Attachments } from "../models/attachments";
import { AttachmentsResponse } from "../models/attachmentsResponse";
import { Document } from "../models/document";
import { DocumentPagesResponse } from "../models/documentPagesResponse";
import { DocumentProperties } from "../models/documentProperties";
import { DocumentPropertiesResponse } from "../models/documentPropertiesResponse";
import { DocumentProperty } from "../models/documentProperty";
import { DocumentPropertyResponse } from "../models/documentPropertyResponse";
import { DocumentResponse } from "../models/documentResponse";
import { Field } from "../models/field";
import { FieldResponse } from "../models/fieldResponse";
import { Fields } from "../models/fields";
import { FieldsResponse } from "../models/fieldsResponse";
import { Image } from "../models/image";
import { ImageResponse } from "../models/imageResponse";
import { Images } from "../models/images";
import { ImagesResponse } from "../models/imagesResponse";
import { LinkAnnotation } from "../models/linkAnnotation";
import { LinkAnnotationResponse } from "../models/linkAnnotationResponse";
import { LinkAnnotations } from "../models/linkAnnotations";
import { LinkAnnotationsResponse } from "../models/linkAnnotationsResponse";
import { Page } from "../models/page";
import { Pages } from "../models/pages";
import { SignatureVerifyResponse } from "../models/signatureVerifyResponse";
import { SplitResultDocument } from "../models/splitResultDocument";
import { SplitResultResponse } from "../models/splitResultResponse";
import { TextFormat } from "../models/textFormat";
import { TextFormatResponse } from "../models/textFormatResponse";
import { TextItem } from "../models/textItem";
import { TextItemResponse } from "../models/textItemResponse";
import { TextItems } from "../models/textItems";
import { TextItemsResponse } from "../models/textItemsResponse";
import { TextRectsResponse } from "../models/textRectsResponse";
import { TextReplaceRequest } from "../models/textReplaceRequest";
import { TextReplaceResponse } from "../models/textReplaceResponse";
import { WordCountResponse } from "../models/wordCountResponse";
import { DocumentTextReplaceResponse } from "../models/documentTextReplaceResponse";
import { PageTextReplaceResponse } from "../models/pageTextReplaceResponse";

import { ObjectSerializer } from "../objectSerializer";
import { Configuration } from "../configuration";

import localVarRequest = require('request');
import http = require('http');
import { invokeApiMethod } from "../requestHelper";

let defaultBasePath = 'https://api.aspose.cloud/v1.1';




export class PdfApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    /**
     * API configuration
     */
    public configuration: Configuration;
    
    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string) {
        if (baseUrl === null || baseUrl === undefined)
        {
            baseUrl = defaultBasePath;   
        }
        this.configuration = new Configuration(appSID, appKey, baseUrl);
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this.configuration.baseUrl = basePath;
    }

    get basePath() {
        return this.configuration.baseUrl;
    }



    /**
     * 
     * @summary Delete document field by name.
     * @param name The document name.
     * @param fieldName The field name/
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteField (name: string, fieldName: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields/{fieldName}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteField.');
        }

        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new Error('Required parameter fieldName was null or undefined when calling deleteField.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete document page by its number.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deletePage (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deletePage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling deletePage.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete custom document properties.
     * @param name 
     * @param storage 
     * @param folder 
     */
    public async deleteProperties (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/documentproperties'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteProperties.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete document property.
     * @param name 
     * @param propertyName 
     * @param storage 
     * @param folder 
     */
    public async deleteProperty (name: string, propertyName: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/documentproperties/{propertyName}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteProperty.');
        }

        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('Required parameter propertyName was null or undefined when calling deleteProperty.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read common document info or convert to some format if the format specified.
     * @param name The document name.
     * @param format The format to convert.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param outPath Path to save result
     */
    public async getDocument (name: string, format?: string, storage?: string, folder?: string, outPath?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocument.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document attachment info by its index.
     * @param name The document name.
     * @param attachmentIndex The attachment index.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentAttachmentByIndex (name: string, attachmentIndex: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: AttachmentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/attachments/{attachmentIndex}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'attachmentIndex' + '}', encodeURIComponent(String(attachmentIndex)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentAttachmentByIndex.');
        }

        // verify required parameter 'attachmentIndex' is not null or undefined
        if (attachmentIndex === null || attachmentIndex === undefined) {
            throw new Error('Required parameter attachmentIndex was null or undefined when calling getDocumentAttachmentByIndex.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AttachmentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document attachments info.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentAttachments (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: AttachmentsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/attachments'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentAttachments.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AttachmentsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document bookmark/bookmarks (including children).
     * @param name The document name.
     * @param bookmarkPath The bookmark path. Leave it empty if you want to get all the bookmarks in the document.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentBookmarks (name: string, bookmarkPath?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/bookmarks'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentBookmarks.');
        }

        if (bookmarkPath !== undefined && null !== bookmarkPath) {
            localVarQueryParameters['bookmarkPath'] = ObjectSerializer.serialize(bookmarkPath, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document properties.
     * @param name 
     * @param storage 
     * @param folder 
     */
    public async getDocumentProperties (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentPropertiesResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/documentproperties'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentProperties.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document property by name.
     * @param name 
     * @param propertyName 
     * @param storage 
     * @param folder 
     */
    public async getDocumentProperty (name: string, propertyName: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentPropertyResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/documentproperties/{propertyName}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentProperty.');
        }

        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('Required parameter propertyName was null or undefined when calling getDocumentProperty.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Download a specific file 
     * @param path Path of the file including the file name and extension e.g. /file.ext
     * @param versionId File&#39;s version
     * @param storage User&#39;s storage name
     */
    public async getDownload (path: string, versionId?: string, storage?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/storage/file';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling getDownload.');
        }

        if (path !== undefined && null !== path) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }

        if (versionId !== undefined && null !== versionId) {
            localVarQueryParameters['versionId'] = ObjectSerializer.serialize(versionId, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Download document attachment content by its index.
     * @param name The document name.
     * @param attachmentIndex The attachment index.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDownloadDocumentAttachmentByIndex (name: string, attachmentIndex: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/attachments/{attachmentIndex}/download'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'attachmentIndex' + '}', encodeURIComponent(String(attachmentIndex)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDownloadDocumentAttachmentByIndex.');
        }

        // verify required parameter 'attachmentIndex' is not null or undefined
        if (attachmentIndex === null || attachmentIndex === undefined) {
            throw new Error('Required parameter attachmentIndex was null or undefined when calling getDownloadDocumentAttachmentByIndex.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert EPUB file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.epub)
     */
    public async getEpubInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/epub';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getEpubInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Get document field by name.
     * @param name The document name.
     * @param fieldName The field name/
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getField (name: string, fieldName: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: FieldResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields/{fieldName}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getField.');
        }

        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new Error('Required parameter fieldName was null or undefined when calling getField.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Get document fields.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getFields (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: FieldsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFields.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read page fragment.
     * @param name 
     * @param pageNumber 
     * @param fragmentNumber 
     * @param withEmpty 
     * @param storage 
     * @param folder 
     */
    public async getFragment (name: string, pageNumber: number, fragmentNumber: number, withEmpty?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextItemsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/fragments/{fragmentNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'fragmentNumber' + '}', encodeURIComponent(String(fragmentNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFragment.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getFragment.');
        }

        // verify required parameter 'fragmentNumber' is not null or undefined
        if (fragmentNumber === null || fragmentNumber === undefined) {
            throw new Error('Required parameter fragmentNumber was null or undefined when calling getFragment.');
        }

        if (withEmpty !== undefined && null !== withEmpty) {
            localVarQueryParameters['withEmpty'] = ObjectSerializer.serialize(withEmpty, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read page fragment text format.
     * @param name 
     * @param pageNumber 
     * @param fragmentNumber 
     * @param storage 
     * @param folder 
     */
    public async getFragmentTextFormat (name: string, pageNumber: number, fragmentNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextFormatResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/fragments/{fragmentNumber}/textFormat'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'fragmentNumber' + '}', encodeURIComponent(String(fragmentNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFragmentTextFormat.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getFragmentTextFormat.');
        }

        // verify required parameter 'fragmentNumber' is not null or undefined
        if (fragmentNumber === null || fragmentNumber === undefined) {
            throw new Error('Required parameter fragmentNumber was null or undefined when calling getFragmentTextFormat.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextFormatResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read page fragments.
     * @param name 
     * @param pageNumber 
     * @param withEmpty 
     * @param storage 
     * @param folder 
     */
    public async getFragments (name: string, pageNumber: number, withEmpty?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextItemsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/fragments'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFragments.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getFragments.');
        }

        if (withEmpty !== undefined && null !== withEmpty) {
            localVarQueryParameters['withEmpty'] = ObjectSerializer.serialize(withEmpty, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert HTML file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.zip)
     * @param htmlFileName Name of HTML file in ZIP.
     * @param height Page height
     * @param width Page width
     * @param isLandscape Is page landscaped
     * @param marginLeft Page margin left
     * @param marginBottom Page margin bottom
     * @param marginRight Page margin right
     * @param marginTop Page margin top
     */
    public async getHtmlInStorageToPdf (srcPath: string, htmlFileName: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/html';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getHtmlInStorageToPdf.');
        }

        // verify required parameter 'htmlFileName' is not null or undefined
        if (htmlFileName === null || htmlFileName === undefined) {
            throw new Error('Required parameter htmlFileName was null or undefined when calling getHtmlInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (htmlFileName !== undefined && null !== htmlFileName) {
            localVarQueryParameters['htmlFileName'] = ObjectSerializer.serialize(htmlFileName, "string");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (isLandscape !== undefined && null !== isLandscape) {
            localVarQueryParameters['isLandscape'] = ObjectSerializer.serialize(isLandscape, "boolean");
        }

        if (marginLeft !== undefined && null !== marginLeft) {
            localVarQueryParameters['marginLeft'] = ObjectSerializer.serialize(marginLeft, "number");
        }

        if (marginBottom !== undefined && null !== marginBottom) {
            localVarQueryParameters['marginBottom'] = ObjectSerializer.serialize(marginBottom, "number");
        }

        if (marginRight !== undefined && null !== marginRight) {
            localVarQueryParameters['marginRight'] = ObjectSerializer.serialize(marginRight, "number");
        }

        if (marginTop !== undefined && null !== marginTop) {
            localVarQueryParameters['marginTop'] = ObjectSerializer.serialize(marginTop, "number");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document image in format specified.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param imageNumber The image format.
     * @param format Image format to convert, if not specified the common image data is read.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImage (name: string, pageNumber: number, imageNumber: number, format?: string, width?: number, height?: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images/{imageNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'imageNumber' + '}', encodeURIComponent(String(imageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getImage.');
        }

        // verify required parameter 'imageNumber' is not null or undefined
        if (imageNumber === null || imageNumber === undefined) {
            throw new Error('Required parameter imageNumber was null or undefined when calling getImage.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document images.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImages (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: ImagesResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImages.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getImages.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "ImagesResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.tex)
     */
    public async getLaTeXInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/latex';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getLaTeXInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert MHT file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.mht)
     */
    public async getMhtInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/mht';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getMhtInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to format specified.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param format The format to convert if specified.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPage (name: string, pageNumber: number, format?: string, width?: number, height?: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPage.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page annotation by its number.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotationNumber The annotation number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageAnnotation (name: string, pageNumber: number, annotationNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: AnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/{annotationNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'annotationNumber' + '}', encodeURIComponent(String(annotationNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageAnnotation.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageAnnotation.');
        }

        // verify required parameter 'annotationNumber' is not null or undefined
        if (annotationNumber === null || annotationNumber === undefined) {
            throw new Error('Required parameter annotationNumber was null or undefined when calling getPageAnnotation.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read documant page annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: AnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageAnnotations.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Bmp image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async getPageConvertToBmp (name: string, pageNumber: number, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/bmp'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageConvertToBmp.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageConvertToBmp.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Emf image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async getPageConvertToEmf (name: string, pageNumber: number, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/emf'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageConvertToEmf.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageConvertToEmf.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Gif image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async getPageConvertToGif (name: string, pageNumber: number, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/gif'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageConvertToGif.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageConvertToGif.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Jpeg image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async getPageConvertToJpeg (name: string, pageNumber: number, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/jpeg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageConvertToJpeg.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageConvertToJpeg.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Png image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async getPageConvertToPng (name: string, pageNumber: number, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/png'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageConvertToPng.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageConvertToPng.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Tiff image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async getPageConvertToTiff (name: string, pageNumber: number, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageConvertToTiff.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageConvertToTiff.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page link annotation by its index.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param linkIndex The link index.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageLinkAnnotationByIndex (name: string, pageNumber: number, linkIndex: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: LinkAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/links/{linkIndex}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'linkIndex' + '}', encodeURIComponent(String(linkIndex)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageLinkAnnotationByIndex.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageLinkAnnotationByIndex.');
        }

        // verify required parameter 'linkIndex' is not null or undefined
        if (linkIndex === null || linkIndex === undefined) {
            throw new Error('Required parameter linkIndex was null or undefined when calling getPageLinkAnnotationByIndex.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "LinkAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page link annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageLinkAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: LinkAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/links'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageLinkAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageLinkAnnotations.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "LinkAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read page text items.
     * @param name The document name.
     * @param pageNumber Number of page (starting from 1).
     * @param X 
     * @param Y 
     * @param width 
     * @param height 
     * @param format List of formats for search.
     * @param regex Formats are specified as a regular expression.
     * @param splitRects Split result fragments (default is true).
     * @param folder The document folder.
     */
    public async getPageText (name: string, pageNumber: number, X: number, Y: number, width: number, height: number, format?: Array<string>, regex?: string, splitRects?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: TextRectsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageText.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageText.');
        }

        // verify required parameter 'X' is not null or undefined
        if (X === null || X === undefined) {
            throw new Error('Required parameter X was null or undefined when calling getPageText.');
        }

        // verify required parameter 'Y' is not null or undefined
        if (Y === null || Y === undefined) {
            throw new Error('Required parameter Y was null or undefined when calling getPageText.');
        }

        // verify required parameter 'width' is not null or undefined
        if (width === null || width === undefined) {
            throw new Error('Required parameter width was null or undefined when calling getPageText.');
        }

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getPageText.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "Array<string>");
        }

        if (regex !== undefined && null !== regex) {
            localVarQueryParameters['regex'] = ObjectSerializer.serialize(regex, "string");
        }

        if (X !== undefined && null !== X) {
            localVarQueryParameters['X'] = ObjectSerializer.serialize(X, "number");
        }

        if (Y !== undefined && null !== Y) {
            localVarQueryParameters['Y'] = ObjectSerializer.serialize(Y, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['Width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['Height'] = ObjectSerializer.serialize(height, "number");
        }

        if (splitRects !== undefined && null !== splitRects) {
            localVarQueryParameters['splitRects'] = ObjectSerializer.serialize(splitRects, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextRectsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read page text items.
     * @param name 
     * @param pageNumber 
     * @param withEmpty 
     * @param storage 
     * @param folder 
     */
    public async getPageTextItems (name: string, pageNumber: number, withEmpty?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextItemsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/textItems'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageTextItems.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageTextItems.');
        }

        if (withEmpty !== undefined && null !== withEmpty) {
            localVarQueryParameters['withEmpty'] = ObjectSerializer.serialize(withEmpty, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document pages info.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPages (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentPagesResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPages.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPagesResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PCL file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.pcl)
     */
    public async getPclInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/pcl';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getPclInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to DOC format and returns resulting file in response content
     * @param name The document name.
     * @param addReturnToLineEnd Add return to line end.
     * @param format Allows to specify .doc or .docx file format.
     * @param imageResolutionX Image resolution X.
     * @param imageResolutionY Image resolution Y.
     * @param maxDistanceBetweenTextLines Max distance between text lines.
     * @param mode Allows to control how a PDF document is converted into a word processing document.
     * @param recognizeBullets Recognize bullets.
     * @param relativeHorizontalProximity Relative horizontal proximity.
     * @param folder The document folder.
     */
    public async getPdfInStorageToDoc (name: string, addReturnToLineEnd?: boolean, format?: string, imageResolutionX?: number, imageResolutionY?: number, maxDistanceBetweenTextLines?: number, mode?: string, recognizeBullets?: boolean, relativeHorizontalProximity?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/doc'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToDoc.');
        }

        if (addReturnToLineEnd !== undefined && null !== addReturnToLineEnd) {
            localVarQueryParameters['addReturnToLineEnd'] = ObjectSerializer.serialize(addReturnToLineEnd, "boolean");
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (imageResolutionX !== undefined && null !== imageResolutionX) {
            localVarQueryParameters['imageResolutionX'] = ObjectSerializer.serialize(imageResolutionX, "number");
        }

        if (imageResolutionY !== undefined && null !== imageResolutionY) {
            localVarQueryParameters['imageResolutionY'] = ObjectSerializer.serialize(imageResolutionY, "number");
        }

        if (maxDistanceBetweenTextLines !== undefined && null !== maxDistanceBetweenTextLines) {
            localVarQueryParameters['maxDistanceBetweenTextLines'] = ObjectSerializer.serialize(maxDistanceBetweenTextLines, "number");
        }

        if (mode !== undefined && null !== mode) {
            localVarQueryParameters['mode'] = ObjectSerializer.serialize(mode, "string");
        }

        if (recognizeBullets !== undefined && null !== recognizeBullets) {
            localVarQueryParameters['recognizeBullets'] = ObjectSerializer.serialize(recognizeBullets, "boolean");
        }

        if (relativeHorizontalProximity !== undefined && null !== relativeHorizontalProximity) {
            localVarQueryParameters['relativeHorizontalProximity'] = ObjectSerializer.serialize(relativeHorizontalProximity, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to EPUB format and returns resulting file in response content
     * @param name The document name.
     * @param contentRecognitionMode ??roperty tunes conversion for this or that desirable method of recognition of content.
     * @param folder The document folder.
     */
    public async getPdfInStorageToEpub (name: string, contentRecognitionMode?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/epub'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToEpub.');
        }

        if (contentRecognitionMode !== undefined && null !== contentRecognitionMode) {
            localVarQueryParameters['contentRecognitionMode'] = ObjectSerializer.serialize(contentRecognitionMode, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to Html format and returns resulting file in response content
     * @param name The document name.
     * @param additionalMarginWidthInPoints Defines width of margin that will be forcibly left around that output HTML-areas.
     * @param compressSvgGraphicsIfAny The flag that indicates whether found SVG graphics(if any) will be compressed(zipped) into SVGZ format during saving.
     * @param convertMarkedContentToLayers If attribute ConvertMarkedContentToLayers set to true then an all elements inside a PDF marked content (layer) will be put into an HTML div with \&quot;data-pdflayer\&quot; attribute specifying a layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content.
     * @param defaultFontName Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used.
     * @param documentType Result document type.
     * @param fixedLayout The value indicating whether that HTML is created as fixed layout.
     * @param imageResolution Resolution for image rendering.
     * @param minimalLineWidth This attribute sets minimal width of graphic path line. If thickness of line is less than 1px Adobe Acrobat rounds it to this value. So this attribute can be used to emulate this behavior for HTML browsers.
     * @param preventGlyphsGrouping This attribute switch on the mode when text glyphs will not be grouped into words and strings This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of FixedLayout attribute is true.
     * @param splitCssIntoPages When multipage-mode selected(i.e &#39;SplitIntoPages&#39; is &#39;true&#39;), then this attribute defines whether should be created separate CSS-file for each result HTML page.
     * @param splitIntoPages The flag that indicates whether each page of source document will be converted into it&#39;s own target HTML document, i.e whether result HTML will be splitted into several HTML-pages.
     * @param useZOrder If attribute UseZORder set to true, graphics and text are added to resultant HTML document accordingly Z-order in original PDF document. If this attribute is false all graphics is put as single layer which may cause some unnecessary effects for overlapped objects.
     * @param antialiasingProcessing The parameter defines required antialiasing measures during conversion of compound background images from PDF to HTML.
     * @param cssClassNamesPrefix When PDFtoHTML converter generates result CSSs, CSS class names (something like \&quot;.stl_01 {}\&quot; ... \&quot;.stl_NN {}) are generated and used in result CSS. This property allows forcibly set class name prefix.
     * @param explicitListOfSavedPages With this property You can explicitely define what pages of document should be converted. Pages in this list must have 1-based numbers. I.e. valid numbers of pages must be taken from range (1...[NumberOfPagesInConvertedDocument]) Order of appearing of pages in this list does not affect their order in result HTML page(s) - in result pages allways will go in order in which they are present in source PDF.
     * @param fontEncodingStrategy Defines encoding special rule to tune PDF decoding for current document.
     * @param fontSavingMode Defines font saving mode that will be used during saving of PDF to desirable format.
     * @param htmlMarkupGenerationMode Sometimes specific reqirments to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments.
     * @param lettersPositioningMethod The mode of positioning of letters in words in result HTML.
     * @param pagesFlowTypeDependsOnViewersScreenSize If attribute &#39;SplitOnPages&#x3D;false&#39;, than whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such way that flow of areas that represent PDF pages in result HTML will depend on screen resolution of viewer.
     * @param partsEmbeddingMode It defines whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities.
     * @param rasterImagesSavingMode Converted PDF can contain raster images This parameter defines how they should be handled during conversion of PDF to HTML.
     * @param removeEmptyAreasOnTopAndBottom Defines whether in created HTML will be removed top and bottom empty area without any content (if any).
     * @param saveShadowedTextsAsTransparentTexts Pdf can contain texts that are shadowed by another elements (f.e. by images) but can be selected to clipboard in Acrobat Reader (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML to mimic behaviour of Acrobat Reader (othervise such texts are usually saved as hidden, not available for copying to clipboard).
     * @param saveTransparentTexts Pdf can contain transparent texts that can be selected to clipboard (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML.
     * @param specialFolderForAllImages The path to directory to which must be saved any images if they are encountered during saving of document as HTML. If parameter is empty or null then image files(if any) wil be saved together with other files linked to HTML It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.
     * @param specialFolderForSvgImages The path to directory to which must be saved only SVG-images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG files(if any) wil be saved together with other image-files (near to output file) or in special folder for images (if it specified in SpecialImagesFolderIfAny option). It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.
     * @param trySaveTextUnderliningAndStrikeoutingInCss PDF itself does not contain underlining markers for texts. It emulated with line situated under text. This option allows converter try guess that this or that line is a text&#39;s underlining and put this info into CSS instead of drawing of underlining graphically.
     * @param folder The document folder.
     */
    public async getPdfInStorageToHtml (name: string, additionalMarginWidthInPoints?: number, compressSvgGraphicsIfAny?: boolean, convertMarkedContentToLayers?: boolean, defaultFontName?: string, documentType?: string, fixedLayout?: boolean, imageResolution?: number, minimalLineWidth?: number, preventGlyphsGrouping?: boolean, splitCssIntoPages?: boolean, splitIntoPages?: boolean, useZOrder?: boolean, antialiasingProcessing?: string, cssClassNamesPrefix?: string, explicitListOfSavedPages?: Array<number>, fontEncodingStrategy?: string, fontSavingMode?: string, htmlMarkupGenerationMode?: string, lettersPositioningMethod?: string, pagesFlowTypeDependsOnViewersScreenSize?: boolean, partsEmbeddingMode?: string, rasterImagesSavingMode?: string, removeEmptyAreasOnTopAndBottom?: boolean, saveShadowedTextsAsTransparentTexts?: boolean, saveTransparentTexts?: boolean, specialFolderForAllImages?: string, specialFolderForSvgImages?: string, trySaveTextUnderliningAndStrikeoutingInCss?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/html'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToHtml.');
        }

        if (additionalMarginWidthInPoints !== undefined && null !== additionalMarginWidthInPoints) {
            localVarQueryParameters['additionalMarginWidthInPoints'] = ObjectSerializer.serialize(additionalMarginWidthInPoints, "number");
        }

        if (compressSvgGraphicsIfAny !== undefined && null !== compressSvgGraphicsIfAny) {
            localVarQueryParameters['compressSvgGraphicsIfAny'] = ObjectSerializer.serialize(compressSvgGraphicsIfAny, "boolean");
        }

        if (convertMarkedContentToLayers !== undefined && null !== convertMarkedContentToLayers) {
            localVarQueryParameters['convertMarkedContentToLayers'] = ObjectSerializer.serialize(convertMarkedContentToLayers, "boolean");
        }

        if (defaultFontName !== undefined && null !== defaultFontName) {
            localVarQueryParameters['defaultFontName'] = ObjectSerializer.serialize(defaultFontName, "string");
        }

        if (documentType !== undefined && null !== documentType) {
            localVarQueryParameters['documentType'] = ObjectSerializer.serialize(documentType, "string");
        }

        if (fixedLayout !== undefined && null !== fixedLayout) {
            localVarQueryParameters['fixedLayout'] = ObjectSerializer.serialize(fixedLayout, "boolean");
        }

        if (imageResolution !== undefined && null !== imageResolution) {
            localVarQueryParameters['imageResolution'] = ObjectSerializer.serialize(imageResolution, "number");
        }

        if (minimalLineWidth !== undefined && null !== minimalLineWidth) {
            localVarQueryParameters['minimalLineWidth'] = ObjectSerializer.serialize(minimalLineWidth, "number");
        }

        if (preventGlyphsGrouping !== undefined && null !== preventGlyphsGrouping) {
            localVarQueryParameters['preventGlyphsGrouping'] = ObjectSerializer.serialize(preventGlyphsGrouping, "boolean");
        }

        if (splitCssIntoPages !== undefined && null !== splitCssIntoPages) {
            localVarQueryParameters['splitCssIntoPages'] = ObjectSerializer.serialize(splitCssIntoPages, "boolean");
        }

        if (splitIntoPages !== undefined && null !== splitIntoPages) {
            localVarQueryParameters['splitIntoPages'] = ObjectSerializer.serialize(splitIntoPages, "boolean");
        }

        if (useZOrder !== undefined && null !== useZOrder) {
            localVarQueryParameters['useZOrder'] = ObjectSerializer.serialize(useZOrder, "boolean");
        }

        if (antialiasingProcessing !== undefined && null !== antialiasingProcessing) {
            localVarQueryParameters['antialiasingProcessing'] = ObjectSerializer.serialize(antialiasingProcessing, "string");
        }

        if (cssClassNamesPrefix !== undefined && null !== cssClassNamesPrefix) {
            localVarQueryParameters['cssClassNamesPrefix'] = ObjectSerializer.serialize(cssClassNamesPrefix, "string");
        }

        if (explicitListOfSavedPages !== undefined && null !== explicitListOfSavedPages) {
            localVarQueryParameters['explicitListOfSavedPages'] = ObjectSerializer.serialize(explicitListOfSavedPages, "Array<number>");
        }

        if (fontEncodingStrategy !== undefined && null !== fontEncodingStrategy) {
            localVarQueryParameters['fontEncodingStrategy'] = ObjectSerializer.serialize(fontEncodingStrategy, "string");
        }

        if (fontSavingMode !== undefined && null !== fontSavingMode) {
            localVarQueryParameters['fontSavingMode'] = ObjectSerializer.serialize(fontSavingMode, "string");
        }

        if (htmlMarkupGenerationMode !== undefined && null !== htmlMarkupGenerationMode) {
            localVarQueryParameters['htmlMarkupGenerationMode'] = ObjectSerializer.serialize(htmlMarkupGenerationMode, "string");
        }

        if (lettersPositioningMethod !== undefined && null !== lettersPositioningMethod) {
            localVarQueryParameters['lettersPositioningMethod'] = ObjectSerializer.serialize(lettersPositioningMethod, "string");
        }

        if (pagesFlowTypeDependsOnViewersScreenSize !== undefined && null !== pagesFlowTypeDependsOnViewersScreenSize) {
            localVarQueryParameters['pagesFlowTypeDependsOnViewersScreenSize'] = ObjectSerializer.serialize(pagesFlowTypeDependsOnViewersScreenSize, "boolean");
        }

        if (partsEmbeddingMode !== undefined && null !== partsEmbeddingMode) {
            localVarQueryParameters['partsEmbeddingMode'] = ObjectSerializer.serialize(partsEmbeddingMode, "string");
        }

        if (rasterImagesSavingMode !== undefined && null !== rasterImagesSavingMode) {
            localVarQueryParameters['rasterImagesSavingMode'] = ObjectSerializer.serialize(rasterImagesSavingMode, "string");
        }

        if (removeEmptyAreasOnTopAndBottom !== undefined && null !== removeEmptyAreasOnTopAndBottom) {
            localVarQueryParameters['removeEmptyAreasOnTopAndBottom'] = ObjectSerializer.serialize(removeEmptyAreasOnTopAndBottom, "boolean");
        }

        if (saveShadowedTextsAsTransparentTexts !== undefined && null !== saveShadowedTextsAsTransparentTexts) {
            localVarQueryParameters['saveShadowedTextsAsTransparentTexts'] = ObjectSerializer.serialize(saveShadowedTextsAsTransparentTexts, "boolean");
        }

        if (saveTransparentTexts !== undefined && null !== saveTransparentTexts) {
            localVarQueryParameters['saveTransparentTexts'] = ObjectSerializer.serialize(saveTransparentTexts, "boolean");
        }

        if (specialFolderForAllImages !== undefined && null !== specialFolderForAllImages) {
            localVarQueryParameters['specialFolderForAllImages'] = ObjectSerializer.serialize(specialFolderForAllImages, "string");
        }

        if (specialFolderForSvgImages !== undefined && null !== specialFolderForSvgImages) {
            localVarQueryParameters['specialFolderForSvgImages'] = ObjectSerializer.serialize(specialFolderForSvgImages, "string");
        }

        if (trySaveTextUnderliningAndStrikeoutingInCss !== undefined && null !== trySaveTextUnderliningAndStrikeoutingInCss) {
            localVarQueryParameters['trySaveTextUnderliningAndStrikeoutingInCss'] = ObjectSerializer.serialize(trySaveTextUnderliningAndStrikeoutingInCss, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content
     * @param name The document name.
     * @param pagesCount Pages count.
     * @param folder The document folder.
     */
    public async getPdfInStorageToLaTeX (name: string, pagesCount?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/latex'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToLaTeX.');
        }

        if (pagesCount !== undefined && null !== pagesCount) {
            localVarQueryParameters['pagesCount'] = ObjectSerializer.serialize(pagesCount, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content
     * @param name The document name.
     * @param folder The document folder.
     */
    public async getPdfInStorageToMobiXml (name: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/mobixml'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToMobiXml.');
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to PdfA format and returns resulting file in response content
     * @param name The document name.
     * @param type Type of PdfA format.
     * @param folder The document folder.
     */
    public async getPdfInStorageToPdfA (name: string, type: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/pdfa'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToPdfA.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling getPdfInStorageToPdfA.');
        }

        if (type !== undefined && null !== type) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to PPTX format and returns resulting file in response content
     * @param name The document name.
     * @param separateImages Separate images.
     * @param slidesAsImages Slides as images.
     * @param folder The document folder.
     */
    public async getPdfInStorageToPptx (name: string, separateImages?: boolean, slidesAsImages?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/pptx'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToPptx.');
        }

        if (separateImages !== undefined && null !== separateImages) {
            localVarQueryParameters['separateImages'] = ObjectSerializer.serialize(separateImages, "boolean");
        }

        if (slidesAsImages !== undefined && null !== slidesAsImages) {
            localVarQueryParameters['slidesAsImages'] = ObjectSerializer.serialize(slidesAsImages, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to SVG format and returns resulting file in response content
     * @param name The document name.
     * @param compressOutputToZipArchive Specifies whether output will be created as one zip-archive.
     * @param folder The document folder.
     */
    public async getPdfInStorageToSvg (name: string, compressOutputToZipArchive?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/svg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToSvg.');
        }

        if (compressOutputToZipArchive !== undefined && null !== compressOutputToZipArchive) {
            localVarQueryParameters['compressOutputToZipArchive'] = ObjectSerializer.serialize(compressOutputToZipArchive, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to TIFF format and returns resulting file in response content
     * @param name The document name.
     * @param brightness Image brightness.
     * @param compression Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None.
     * @param colorDepth Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp.
     * @param leftMargin Left image margin.
     * @param rightMargin Right image margin.
     * @param topMargin Top image margin.
     * @param bottomMargin Bottom image margin.
     * @param orientation Image orientation. Possible values are: None, Landscape, Portait.
     * @param skipBlankPages Skip blank pages flag.
     * @param width Image width.
     * @param height Image height.
     * @param xResolution Horizontal resolution.
     * @param yResolution Vertical resolution.
     * @param pageIndex Start page to export.
     * @param pageCount Number of pages to export.
     * @param folder The document folder.
     */
    public async getPdfInStorageToTiff (name: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToTiff.');
        }

        if (brightness !== undefined && null !== brightness) {
            localVarQueryParameters['brightness'] = ObjectSerializer.serialize(brightness, "number");
        }

        if (compression !== undefined && null !== compression) {
            localVarQueryParameters['compression'] = ObjectSerializer.serialize(compression, "string");
        }

        if (colorDepth !== undefined && null !== colorDepth) {
            localVarQueryParameters['colorDepth'] = ObjectSerializer.serialize(colorDepth, "string");
        }

        if (leftMargin !== undefined && null !== leftMargin) {
            localVarQueryParameters['leftMargin'] = ObjectSerializer.serialize(leftMargin, "number");
        }

        if (rightMargin !== undefined && null !== rightMargin) {
            localVarQueryParameters['rightMargin'] = ObjectSerializer.serialize(rightMargin, "number");
        }

        if (topMargin !== undefined && null !== topMargin) {
            localVarQueryParameters['topMargin'] = ObjectSerializer.serialize(topMargin, "number");
        }

        if (bottomMargin !== undefined && null !== bottomMargin) {
            localVarQueryParameters['bottomMargin'] = ObjectSerializer.serialize(bottomMargin, "number");
        }

        if (orientation !== undefined && null !== orientation) {
            localVarQueryParameters['orientation'] = ObjectSerializer.serialize(orientation, "string");
        }

        if (skipBlankPages !== undefined && null !== skipBlankPages) {
            localVarQueryParameters['skipBlankPages'] = ObjectSerializer.serialize(skipBlankPages, "boolean");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (xResolution !== undefined && null !== xResolution) {
            localVarQueryParameters['xResolution'] = ObjectSerializer.serialize(xResolution, "number");
        }

        if (yResolution !== undefined && null !== yResolution) {
            localVarQueryParameters['yResolution'] = ObjectSerializer.serialize(yResolution, "number");
        }

        if (pageIndex !== undefined && null !== pageIndex) {
            localVarQueryParameters['pageIndex'] = ObjectSerializer.serialize(pageIndex, "number");
        }

        if (pageCount !== undefined && null !== pageCount) {
            localVarQueryParameters['pageCount'] = ObjectSerializer.serialize(pageCount, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XLS format and returns resulting file in response content
     * @param name The document name.
     * @param insertBlankColumnAtFirst Insert blank column at first
     * @param minimizeTheNumberOfWorksheets Minimize the number of worksheets
     * @param scaleFactor Scale factor
     * @param uniformWorksheets Uniform worksheets
     * @param folder The document folder.
     */
    public async getPdfInStorageToXls (name: string, insertBlankColumnAtFirst?: boolean, minimizeTheNumberOfWorksheets?: boolean, scaleFactor?: number, uniformWorksheets?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xls'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToXls.');
        }

        if (insertBlankColumnAtFirst !== undefined && null !== insertBlankColumnAtFirst) {
            localVarQueryParameters['insertBlankColumnAtFirst'] = ObjectSerializer.serialize(insertBlankColumnAtFirst, "boolean");
        }

        if (minimizeTheNumberOfWorksheets !== undefined && null !== minimizeTheNumberOfWorksheets) {
            localVarQueryParameters['minimizeTheNumberOfWorksheets'] = ObjectSerializer.serialize(minimizeTheNumberOfWorksheets, "boolean");
        }

        if (scaleFactor !== undefined && null !== scaleFactor) {
            localVarQueryParameters['scaleFactor'] = ObjectSerializer.serialize(scaleFactor, "number");
        }

        if (uniformWorksheets !== undefined && null !== uniformWorksheets) {
            localVarQueryParameters['uniformWorksheets'] = ObjectSerializer.serialize(uniformWorksheets, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XML format and returns resulting file in response content
     * @param name The document name.
     * @param folder The document folder.
     */
    public async getPdfInStorageToXml (name: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xml'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToXml.');
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XPS format and returns resulting file in response content
     * @param name The document name.
     * @param folder The document folder.
     */
    public async getPdfInStorageToXps (name: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xps'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPdfInStorageToXps.');
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PS file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.ps)
     */
    public async getPsInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/ps';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getPsInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read segment.
     * @param name 
     * @param pageNumber 
     * @param fragmentNumber 
     * @param segmentNumber 
     * @param storage 
     * @param folder 
     */
    public async getSegment (name: string, pageNumber: number, fragmentNumber: number, segmentNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextItemResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/fragments/{fragmentNumber}/segments/{segmentNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'fragmentNumber' + '}', encodeURIComponent(String(fragmentNumber)))
            .replace('{' + 'segmentNumber' + '}', encodeURIComponent(String(segmentNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSegment.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getSegment.');
        }

        // verify required parameter 'fragmentNumber' is not null or undefined
        if (fragmentNumber === null || fragmentNumber === undefined) {
            throw new Error('Required parameter fragmentNumber was null or undefined when calling getSegment.');
        }

        // verify required parameter 'segmentNumber' is not null or undefined
        if (segmentNumber === null || segmentNumber === undefined) {
            throw new Error('Required parameter segmentNumber was null or undefined when calling getSegment.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read segment text format.
     * @param name 
     * @param pageNumber 
     * @param fragmentNumber 
     * @param segmentNumber 
     * @param storage 
     * @param folder 
     */
    public async getSegmentTextFormat (name: string, pageNumber: number, fragmentNumber: number, segmentNumber: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextFormatResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/fragments/{fragmentNumber}/segments/{segmentNumber}/textformat'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'fragmentNumber' + '}', encodeURIComponent(String(fragmentNumber)))
            .replace('{' + 'segmentNumber' + '}', encodeURIComponent(String(segmentNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSegmentTextFormat.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getSegmentTextFormat.');
        }

        // verify required parameter 'fragmentNumber' is not null or undefined
        if (fragmentNumber === null || fragmentNumber === undefined) {
            throw new Error('Required parameter fragmentNumber was null or undefined when calling getSegmentTextFormat.');
        }

        // verify required parameter 'segmentNumber' is not null or undefined
        if (segmentNumber === null || segmentNumber === undefined) {
            throw new Error('Required parameter segmentNumber was null or undefined when calling getSegmentTextFormat.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextFormatResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read fragment segments.
     * @param name 
     * @param pageNumber 
     * @param fragmentNumber 
     * @param withEmpty 
     * @param storage 
     * @param folder 
     */
    public async getSegments (name: string, pageNumber: number, fragmentNumber: number, withEmpty?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextItemsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/fragments/{fragmentNumber}/segments'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'fragmentNumber' + '}', encodeURIComponent(String(fragmentNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSegments.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getSegments.');
        }

        // verify required parameter 'fragmentNumber' is not null or undefined
        if (fragmentNumber === null || fragmentNumber === undefined) {
            throw new Error('Required parameter fragmentNumber was null or undefined when calling getSegments.');
        }

        if (withEmpty !== undefined && null !== withEmpty) {
            localVarQueryParameters['withEmpty'] = ObjectSerializer.serialize(withEmpty, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert SVG file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.svg)
     * @param adjustPageSize Adjust page size
     * @param height Page height
     * @param width Page width
     * @param isLandscape Is page landscaped
     * @param marginLeft Page margin left
     * @param marginBottom Page margin bottom
     * @param marginRight Page margin right
     * @param marginTop Page margin top
     */
    public async getSvgInStorageToPdf (srcPath: string, adjustPageSize?: boolean, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/svg';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getSvgInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (adjustPageSize !== undefined && null !== adjustPageSize) {
            localVarQueryParameters['adjustPageSize'] = ObjectSerializer.serialize(adjustPageSize, "boolean");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (isLandscape !== undefined && null !== isLandscape) {
            localVarQueryParameters['isLandscape'] = ObjectSerializer.serialize(isLandscape, "boolean");
        }

        if (marginLeft !== undefined && null !== marginLeft) {
            localVarQueryParameters['marginLeft'] = ObjectSerializer.serialize(marginLeft, "number");
        }

        if (marginBottom !== undefined && null !== marginBottom) {
            localVarQueryParameters['marginBottom'] = ObjectSerializer.serialize(marginBottom, "number");
        }

        if (marginRight !== undefined && null !== marginRight) {
            localVarQueryParameters['marginRight'] = ObjectSerializer.serialize(marginRight, "number");
        }

        if (marginTop !== undefined && null !== marginTop) {
            localVarQueryParameters['marginTop'] = ObjectSerializer.serialize(marginTop, "number");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document text.
     * @param name The document name.
     * @param X 
     * @param Y 
     * @param width 
     * @param height 
     * @param format List of formats for search.
     * @param regex Formats are specified as a regular expression.
     * @param splitRects Split result fragments (default is true).
     * @param folder The document folder.
     */
    public async getText (name: string, X: number, Y: number, width: number, height: number, format?: Array<string>, regex?: string, splitRects?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: TextRectsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getText.');
        }

        // verify required parameter 'X' is not null or undefined
        if (X === null || X === undefined) {
            throw new Error('Required parameter X was null or undefined when calling getText.');
        }

        // verify required parameter 'Y' is not null or undefined
        if (Y === null || Y === undefined) {
            throw new Error('Required parameter Y was null or undefined when calling getText.');
        }

        // verify required parameter 'width' is not null or undefined
        if (width === null || width === undefined) {
            throw new Error('Required parameter width was null or undefined when calling getText.');
        }

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getText.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "Array<string>");
        }

        if (regex !== undefined && null !== regex) {
            localVarQueryParameters['regex'] = ObjectSerializer.serialize(regex, "string");
        }

        if (X !== undefined && null !== X) {
            localVarQueryParameters['X'] = ObjectSerializer.serialize(X, "number");
        }

        if (Y !== undefined && null !== Y) {
            localVarQueryParameters['Y'] = ObjectSerializer.serialize(Y, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['Width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['Height'] = ObjectSerializer.serialize(height, "number");
        }

        if (splitRects !== undefined && null !== splitRects) {
            localVarQueryParameters['splitRects'] = ObjectSerializer.serialize(splitRects, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextRectsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document text items.
     * @param name 
     * @param withEmpty 
     * @param storage 
     * @param folder 
     */
    public async getTextItems (name: string, withEmpty?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextItemsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/textItems'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getTextItems.');
        }

        if (withEmpty !== undefined && null !== withEmpty) {
            localVarQueryParameters['withEmpty'] = ObjectSerializer.serialize(withEmpty, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Verify signature document.
     * @param name The document name.
     * @param signName Sign name.
     * @param folder The document folder.
     */
    public async getVerifySignature (name: string, signName: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SignatureVerifyResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/verifySignature'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getVerifySignature.');
        }

        // verify required parameter 'signName' is not null or undefined
        if (signName === null || signName === undefined) {
            throw new Error('Required parameter signName was null or undefined when calling getVerifySignature.');
        }

        if (signName !== undefined && null !== signName) {
            localVarQueryParameters['signName'] = ObjectSerializer.serialize(signName, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SignatureVerifyResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert web page to PDF format and return resulting file in response. 
     * @param url Source url
     * @param height Page height
     * @param width Page width
     * @param isLandscape Is page landscaped
     * @param marginLeft Page margin left
     * @param marginBottom Page margin bottom
     * @param marginRight Page margin right
     * @param marginTop Page margin top
     */
    public async getWebInStorageToPdf (url: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/web';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new Error('Required parameter url was null or undefined when calling getWebInStorageToPdf.');
        }

        if (url !== undefined && null !== url) {
            localVarQueryParameters['url'] = ObjectSerializer.serialize(url, "string");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (isLandscape !== undefined && null !== isLandscape) {
            localVarQueryParameters['isLandscape'] = ObjectSerializer.serialize(isLandscape, "boolean");
        }

        if (marginLeft !== undefined && null !== marginLeft) {
            localVarQueryParameters['marginLeft'] = ObjectSerializer.serialize(marginLeft, "number");
        }

        if (marginBottom !== undefined && null !== marginBottom) {
            localVarQueryParameters['marginBottom'] = ObjectSerializer.serialize(marginBottom, "number");
        }

        if (marginRight !== undefined && null !== marginRight) {
            localVarQueryParameters['marginRight'] = ObjectSerializer.serialize(marginRight, "number");
        }

        if (marginTop !== undefined && null !== marginTop) {
            localVarQueryParameters['marginTop'] = ObjectSerializer.serialize(marginTop, "number");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Get number of words per document page.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getWordsPerPage (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: WordCountResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/wordCount'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getWordsPerPage.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "WordCountResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and returns resulting file response content
     * @param name The document name.
     * @param folder The document folder.
     */
    public async getXfaPdfInStorageToAcroForm (name: string, folder?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xfatoacroform'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getXfaPdfInStorageToAcroForm.');
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XML file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xml)
     * @param xslFilePath Full XSL source filename (ex. /folder1/folder2/template.xsl)
     */
    public async getXmlInStorageToPdf (srcPath: string, xslFilePath?: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/xml';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getXmlInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (xslFilePath !== undefined && null !== xslFilePath) {
            localVarQueryParameters['xslFilePath'] = ObjectSerializer.serialize(xslFilePath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XPS file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xps)
     */
    public async getXpsInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/xps';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getXpsInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XslFo file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xslfo)
     */
    public async getXslFoInStorageToPdf (srcPath: string) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/xslfo';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getXslFoInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Append document to existing one.
     * @param name The original document name.
     * @param appendDocument with the append document data.
     * @param appendFile Append file server path.
     * @param startPage Appending start page.
     * @param endPage Appending end page.
     * @param storage The documents storage.
     * @param folder The original document folder.
     */
    public async postAppendDocument (name: string, appendDocument?: AppendDocument, appendFile?: string, startPage?: number, endPage?: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/appendDocument'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postAppendDocument.');
        }

        if (appendFile !== undefined && null !== appendFile) {
            localVarQueryParameters['appendFile'] = ObjectSerializer.serialize(appendFile, "string");
        }

        if (startPage !== undefined && null !== startPage) {
            localVarQueryParameters['startPage'] = ObjectSerializer.serialize(startPage, "number");
        }

        if (endPage !== undefined && null !== endPage) {
            localVarQueryParameters['endPage'] = ObjectSerializer.serialize(endPage, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(appendDocument, "AppendDocument")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Create field.
     * @param name The document name.
     * @param page Document page number.
     * @param field with the field data.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postCreateField (name: string, page: number, field?: Field, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postCreateField.');
        }

        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling postCreateField.');
        }

        if (page !== undefined && null !== page) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(field, "Field")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Document's replace text method. Deprecated
     * @param name 
     * @param textReplace 
     * @param storage 
     * @param folder 
     */
    public async postDocumentReplaceText (name: string, textReplace: TextReplaceRequest, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentTextReplaceResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/replaceText'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postDocumentReplaceText.');
        }

        // verify required parameter 'textReplace' is not null or undefined
        if (textReplace === null || textReplace === undefined) {
            throw new Error('Required parameter textReplace was null or undefined when calling postDocumentReplaceText.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(textReplace, "TextReplaceRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentTextReplaceResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Document's replace text method. Deprecated
     * @param name 
     * @param textReplaceListRequest 
     * @param storage 
     * @param folder 
     */
    public async postDocumentReplaceTextList (name: string, textReplaceListRequest: TextReplaceListRequest, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentTextReplaceResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/replaceTextList'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postDocumentReplaceTextList.');
        }

        // verify required parameter 'textReplaceListRequest' is not null or undefined
        if (textReplaceListRequest === null || textReplaceListRequest === undefined) {
            throw new Error('Required parameter textReplaceListRequest was null or undefined when calling postDocumentReplaceTextList.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(textReplaceListRequest, "TextReplaceListRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentTextReplaceResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Document's replace text method.
     * @param name 
     * @param textReplace 
     * @param storage 
     * @param folder 
     */
    public async postDocumentTextReplace (name: string, textReplace: TextReplaceListRequest, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextReplaceResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/text/replace'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postDocumentTextReplace.');
        }

        // verify required parameter 'textReplace' is not null or undefined
        if (textReplace === null || textReplace === undefined) {
            throw new Error('Required parameter textReplace was null or undefined when calling postDocumentTextReplace.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(textReplace, "TextReplaceListRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextReplaceResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Move page to new position.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param newIndex The new page position/index.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postMovePage (name: string, pageNumber: number, newIndex: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/movePage'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postMovePage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postMovePage.');
        }

        // verify required parameter 'newIndex' is not null or undefined
        if (newIndex === null || newIndex === undefined) {
            throw new Error('Required parameter newIndex was null or undefined when calling postMovePage.');
        }

        if (newIndex !== undefined && null !== newIndex) {
            localVarQueryParameters['newIndex'] = ObjectSerializer.serialize(newIndex, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Optimize document.
     * @param name The document name.
     * @param options The optimization options.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postOptimizeDocument (name: string, options?: OptimizeOptions, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/optimize'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postOptimizeDocument.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(options, "OptimizeOptions")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Page's replace text method. Deprecated
     * @param name 
     * @param pageNumber 
     * @param textReplace 
     * @param storage 
     * @param folder 
     */
    public async postPageReplaceText (name: string, pageNumber: number, textReplace: TextReplaceRequest, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: PageTextReplaceResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/replaceText'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageReplaceText.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageReplaceText.');
        }

        // verify required parameter 'textReplace' is not null or undefined
        if (textReplace === null || textReplace === undefined) {
            throw new Error('Required parameter textReplace was null or undefined when calling postPageReplaceText.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(textReplace, "TextReplaceRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "PageTextReplaceResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Page's replace text method. Deprecated
     * @param name 
     * @param pageNumber 
     * @param textReplaceListRequest 
     * @param storage 
     * @param folder 
     */
    public async postPageReplaceTextList (name: string, pageNumber: number, textReplaceListRequest: TextReplaceListRequest, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: PageTextReplaceResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/replaceTextList'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageReplaceTextList.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageReplaceTextList.');
        }

        // verify required parameter 'textReplaceListRequest' is not null or undefined
        if (textReplaceListRequest === null || textReplaceListRequest === undefined) {
            throw new Error('Required parameter textReplaceListRequest was null or undefined when calling postPageReplaceTextList.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(textReplaceListRequest, "TextReplaceListRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "PageTextReplaceResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Page's replace text method.
     * @param name 
     * @param pageNumber 
     * @param textReplaceListRequest 
     * @param storage 
     * @param folder 
     */
    public async postPageTextReplace (name: string, pageNumber: number, textReplaceListRequest: TextReplaceListRequest, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: TextReplaceResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/text/replace'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageTextReplace.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageTextReplace.');
        }

        // verify required parameter 'textReplaceListRequest' is not null or undefined
        if (textReplaceListRequest === null || textReplaceListRequest === undefined) {
            throw new Error('Required parameter textReplaceListRequest was null or undefined when calling postPageTextReplace.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(textReplaceListRequest, "TextReplaceListRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextReplaceResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document image.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param imageNumber The image number.
     * @param imageFile Path to image file if specified. Request content is used otherwise.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param image Image file.
     */
    public async postReplaceImage (name: string, pageNumber: number, imageNumber: number, imageFile?: string, storage?: string, folder?: string, image?: Buffer) : Promise<{ response: http.ClientResponse; body: ImageResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images/{imageNumber}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'imageNumber' + '}', encodeURIComponent(String(imageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postReplaceImage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postReplaceImage.');
        }

        // verify required parameter 'imageNumber' is not null or undefined
        if (imageNumber === null || imageNumber === undefined) {
            throw new Error('Required parameter imageNumber was null or undefined when calling postReplaceImage.');
        }

        if (imageFile !== undefined && null !== imageFile) {
            localVarQueryParameters['imageFile'] = ObjectSerializer.serialize(imageFile, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (image !== undefined) {
            localVarFormParams['image'] = image;
            fileData = image;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "ImageResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Sign document.
     * @param name The document name.
     * @param signature Signature object containing signature data.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postSignDocument (name: string, signature?: Signature, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/sign'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postSignDocument.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(signature, "Signature")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Sign page.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param signature Signature object containing signature data.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postSignPage (name: string, pageNumber: number, signature?: Signature, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/sign'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postSignPage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postSignPage.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(signature, "Signature")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Split document to parts.
     * @param name Document name.
     * @param format Resulting documents format.
     * @param from Start page if defined.
     * @param to End page if defined.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postSplitDocument (name: string, format?: string, from?: number, to?: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SplitResultResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/split'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postSplitDocument.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (from !== undefined && null !== from) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(from, "number");
        }

        if (to !== undefined && null !== to) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(to, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SplitResultResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add new page to end of the document.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putAddNewPage (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentPagesResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putAddNewPage.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPagesResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add text to PDF document page. Deprecated
     * @param name Name of the document to which text should be added.
     * @param pageNumber Number of page (starting with 1) to which text should be added.
     * @param paragraph Paragraph data.
     * @param storage File storage to be used.
     * @param folder Document folder.
     */
    public async putAddParagraph (name: string, pageNumber: number, paragraph?: Paragraph, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/paragraph'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putAddParagraph.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putAddParagraph.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(paragraph, "Paragraph")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add text to PDF document page.
     * @param name The document name.
     * @param pageNumber Number of page (starting from 1).
     * @param paragraph Paragraph data.
     * @param folder Document folder.
     */
    public async putAddText (name: string, pageNumber: number, paragraph?: Paragraph, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putAddText.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putAddText.');
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(paragraph, "Paragraph")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document from request content to format specified.
     * @param format The format to convert.
     * @param url 
     * @param outPath Path to save result
     * @param file A file to be converted.
     */
    public async putConvertDocument (format?: string, url?: string, outPath?: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/convert';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (url !== undefined && null !== url) {
            localVarQueryParameters['url'] = ObjectSerializer.serialize(url, "string");
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Upload a specific file 
     * @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
     * @param file File to upload
     * @param versionId Source file&#39;s version
     * @param storage User&#39;s storage name
     */
    public async putCreate (path: string, file: Buffer, versionId?: string, storage?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/storage/file';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling putCreate.');
        }

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling putCreate.');
        }

        if (path !== undefined && null !== path) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }

        if (versionId !== undefined && null !== versionId) {
            localVarQueryParameters['versionId'] = ObjectSerializer.serialize(versionId, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['File'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Create new document.
     * @param name The new document name.
     * @param templateFile The template file server path if defined.
     * @param dataFile The data file path (for xml template only).
     * @param templateType The template type, can be xml, html, bmp, jpg, png, tiff, emf, cgm, tex.
     * @param storage The document storage.
     * @param folder The new document folder.
     * @param url The url of web page if defined.
     * @param fitSize Draw a margin around content in resulting pdf.
     */
    public async putCreateDocument (name: string, templateFile?: string, dataFile?: string, templateType?: string, storage?: string, folder?: string, url?: string, fitSize?: boolean) : Promise<{ response: http.ClientResponse; body: DocumentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putCreateDocument.');
        }

        if (templateFile !== undefined && null !== templateFile) {
            localVarQueryParameters['templateFile'] = ObjectSerializer.serialize(templateFile, "string");
        }

        if (dataFile !== undefined && null !== dataFile) {
            localVarQueryParameters['dataFile'] = ObjectSerializer.serialize(dataFile, "string");
        }

        if (templateType !== undefined && null !== templateType) {
            localVarQueryParameters['templateType'] = ObjectSerializer.serialize(templateType, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (url !== undefined && null !== url) {
            localVarQueryParameters['url'] = ObjectSerializer.serialize(url, "string");
        }

        if (fitSize !== undefined && null !== fitSize) {
            localVarQueryParameters['fitSize'] = ObjectSerializer.serialize(fitSize, "boolean");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Create new document from images.
     * @param name The new document name.
     * @param images The images file paths set.  
     * @param ocr To create OCR layer for image or not.
     * @param ocrLang The language which is defined for OCR engine. Default is eng.
     * @param storage The document storage.
     * @param folder The new document folder.
     */
    public async putCreateDocumentFromImages (name: string, images?: ImagesListRequest, ocr?: boolean, ocrLang?: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fromimages'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putCreateDocumentFromImages.');
        }

        if (ocr !== undefined && null !== ocr) {
            localVarQueryParameters['ocr'] = ObjectSerializer.serialize(ocr, "boolean");
        }

        if (ocrLang !== undefined && null !== ocrLang) {
            localVarQueryParameters['ocrLang'] = ObjectSerializer.serialize(ocrLang, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(images, "ImagesListRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Save document as Tiff image.
     * @param name The document name.
     * @param exportOptions with tiff export options.
     * @param resultFile The resulting file.
     * @param brightness The image brightness.
     * @param compression Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None.
     * @param colorDepth Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp.
     * @param leftMargin Left image margin.
     * @param rightMargin Right image margin.
     * @param topMargin Top image margin.
     * @param bottomMargin Bottom image margin.
     * @param orientation Image orientation. Possible values are: None, Landscape, Portait.
     * @param skipBlankPages Skip blank pages flag.
     * @param width Image width.
     * @param height Image height.
     * @param xResolution Horizontal resolution.
     * @param yResolution Vertical resolution.
     * @param pageIndex Start page to export.
     * @param pageCount Number of pages to export.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putDocumentSaveAsTiff (name: string, exportOptions?: TiffExportOptions, resultFile?: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/SaveAs/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putDocumentSaveAsTiff.');
        }

        if (resultFile !== undefined && null !== resultFile) {
            localVarQueryParameters['resultFile'] = ObjectSerializer.serialize(resultFile, "string");
        }

        if (brightness !== undefined && null !== brightness) {
            localVarQueryParameters['brightness'] = ObjectSerializer.serialize(brightness, "number");
        }

        if (compression !== undefined && null !== compression) {
            localVarQueryParameters['compression'] = ObjectSerializer.serialize(compression, "string");
        }

        if (colorDepth !== undefined && null !== colorDepth) {
            localVarQueryParameters['colorDepth'] = ObjectSerializer.serialize(colorDepth, "string");
        }

        if (leftMargin !== undefined && null !== leftMargin) {
            localVarQueryParameters['leftMargin'] = ObjectSerializer.serialize(leftMargin, "number");
        }

        if (rightMargin !== undefined && null !== rightMargin) {
            localVarQueryParameters['rightMargin'] = ObjectSerializer.serialize(rightMargin, "number");
        }

        if (topMargin !== undefined && null !== topMargin) {
            localVarQueryParameters['topMargin'] = ObjectSerializer.serialize(topMargin, "number");
        }

        if (bottomMargin !== undefined && null !== bottomMargin) {
            localVarQueryParameters['bottomMargin'] = ObjectSerializer.serialize(bottomMargin, "number");
        }

        if (orientation !== undefined && null !== orientation) {
            localVarQueryParameters['orientation'] = ObjectSerializer.serialize(orientation, "string");
        }

        if (skipBlankPages !== undefined && null !== skipBlankPages) {
            localVarQueryParameters['skipBlankPages'] = ObjectSerializer.serialize(skipBlankPages, "boolean");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (xResolution !== undefined && null !== xResolution) {
            localVarQueryParameters['xResolution'] = ObjectSerializer.serialize(xResolution, "number");
        }

        if (yResolution !== undefined && null !== yResolution) {
            localVarQueryParameters['yResolution'] = ObjectSerializer.serialize(yResolution, "number");
        }

        if (pageIndex !== undefined && null !== pageIndex) {
            localVarQueryParameters['pageIndex'] = ObjectSerializer.serialize(pageIndex, "number");
        }

        if (pageCount !== undefined && null !== pageCount) {
            localVarQueryParameters['pageCount'] = ObjectSerializer.serialize(pageCount, "number");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(exportOptions, "TiffExportOptions")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.epub)
     * @param dstFolder The destination document folder.
     */
    public async putEpubInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/epub'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putEpubInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putEpubInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Flatten form fields in document.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putFieldsFlatten (name: string, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields/flatten'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putFieldsFlatten.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert HTML file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.zip)
     * @param htmlFileName Name of HTML file in ZIP.
     * @param height Page height
     * @param width Page width
     * @param isLandscape Is page landscaped
     * @param marginLeft Page margin left
     * @param marginBottom Page margin bottom
     * @param marginRight Page margin right
     * @param marginTop Page margin top
     * @param dstFolder The destination document folder.
     */
    public async putHtmlInStorageToPdf (name: string, srcPath: string, htmlFileName: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/html'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putHtmlInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putHtmlInStorageToPdf.');
        }

        // verify required parameter 'htmlFileName' is not null or undefined
        if (htmlFileName === null || htmlFileName === undefined) {
            throw new Error('Required parameter htmlFileName was null or undefined when calling putHtmlInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (htmlFileName !== undefined && null !== htmlFileName) {
            localVarQueryParameters['htmlFileName'] = ObjectSerializer.serialize(htmlFileName, "string");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (isLandscape !== undefined && null !== isLandscape) {
            localVarQueryParameters['isLandscape'] = ObjectSerializer.serialize(isLandscape, "boolean");
        }

        if (marginLeft !== undefined && null !== marginLeft) {
            localVarQueryParameters['marginLeft'] = ObjectSerializer.serialize(marginLeft, "number");
        }

        if (marginBottom !== undefined && null !== marginBottom) {
            localVarQueryParameters['marginBottom'] = ObjectSerializer.serialize(marginBottom, "number");
        }

        if (marginRight !== undefined && null !== marginRight) {
            localVarQueryParameters['marginRight'] = ObjectSerializer.serialize(marginRight, "number");
        }

        if (marginTop !== undefined && null !== marginTop) {
            localVarQueryParameters['marginTop'] = ObjectSerializer.serialize(marginTop, "number");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert image file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param imageTemplates Image templates
     * @param dstFolder The destination document folder.
     */
    public async putImageInStorageToPdf (name: string, imageTemplates: ImageTemplatesRequest, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/images'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImageInStorageToPdf.');
        }

        // verify required parameter 'imageTemplates' is not null or undefined
        if (imageTemplates === null || imageTemplates === undefined) {
            throw new Error('Required parameter imageTemplates was null or undefined when calling putImageInStorageToPdf.');
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(imageTemplates, "ImageTemplatesRequest")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in format specified to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsGif (name: string, pageNumber: number, width?: number, height?: number, folder?: string, destFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images/extract/gif'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImagesExtractAsGif.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putImagesExtractAsGif.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (destFolder !== undefined && null !== destFolder) {
            localVarQueryParameters['destFolder'] = ObjectSerializer.serialize(destFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in format specified to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsJpeg (name: string, pageNumber: number, width?: number, height?: number, folder?: string, destFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images/extract/jpeg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImagesExtractAsJpeg.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putImagesExtractAsJpeg.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (destFolder !== undefined && null !== destFolder) {
            localVarQueryParameters['destFolder'] = ObjectSerializer.serialize(destFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in format specified to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsPng (name: string, pageNumber: number, width?: number, height?: number, folder?: string, destFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images/extract/png'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImagesExtractAsPng.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putImagesExtractAsPng.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (destFolder !== undefined && null !== destFolder) {
            localVarQueryParameters['destFolder'] = ObjectSerializer.serialize(destFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in format specified to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsTiff (name: string, pageNumber: number, width?: number, height?: number, folder?: string, destFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images/extract/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImagesExtractAsTiff.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putImagesExtractAsTiff.');
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (destFolder !== undefined && null !== destFolder) {
            localVarQueryParameters['destFolder'] = ObjectSerializer.serialize(destFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.tex)
     * @param dstFolder The destination document folder.
     */
    public async putLaTeXInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/latex'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putLaTeXInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putLaTeXInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Merge a list of documents.
     * @param name Resulting documen name.
     * @param mergeDocuments with a list of documents.
     * @param storage Resulting document storage.
     * @param folder Resulting document folder.
     */
    public async putMergeDocuments (name: string, mergeDocuments?: MergeDocuments, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/merge'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putMergeDocuments.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(mergeDocuments, "MergeDocuments")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.mht)
     * @param dstFolder The destination document folder.
     */
    public async putMhtInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/mht'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putMhtInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putMhtInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add page stamp.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param stamp with data.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putPageAddStamp (name: string, pageNumber: number, stamp: Stamp, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/stamp'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageAddStamp.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageAddStamp.');
        }

        // verify required parameter 'stamp' is not null or undefined
        if (stamp === null || stamp === undefined) {
            throw new Error('Required parameter stamp was null or undefined when calling putPageAddStamp.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(stamp, "Stamp")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to bmp image and save in storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async putPageConvertToBmp (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/bmp'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageConvertToBmp.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageConvertToBmp.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPageConvertToBmp.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to emf image and save in storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async putPageConvertToEmf (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/emf'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageConvertToEmf.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageConvertToEmf.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPageConvertToEmf.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to gif image and save in storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async putPageConvertToGif (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/gif'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageConvertToGif.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageConvertToGif.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPageConvertToGif.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Jpeg image and save in storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async putPageConvertToJpeg (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/jpeg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageConvertToJpeg.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageConvertToJpeg.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPageConvertToJpeg.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to png image and save in storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async putPageConvertToPng (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/png'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageConvertToPng.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageConvertToPng.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPageConvertToPng.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Tiff image and save in storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     */
    public async putPageConvertToTiff (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/convert/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPageConvertToTiff.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling putPageConvertToTiff.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPageConvertToTiff.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PCL file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.pcl)
     * @param dstFolder The destination document folder.
     */
    public async putPclInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/pcl'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPclInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putPclInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to DOC format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.doc)
     * @param addReturnToLineEnd Add return to line end.
     * @param format Allows to specify .doc or .docx file format.
     * @param imageResolutionX Image resolution X.
     * @param imageResolutionY Image resolution Y.
     * @param maxDistanceBetweenTextLines Max distance between text lines.
     * @param mode Allows to control how a PDF document is converted into a word processing document.
     * @param recognizeBullets Recognize bullets.
     * @param relativeHorizontalProximity Relative horizontal proximity.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToDoc (outPath: string, addReturnToLineEnd?: boolean, format?: string, imageResolutionX?: number, imageResolutionY?: number, maxDistanceBetweenTextLines?: number, mode?: string, recognizeBullets?: boolean, relativeHorizontalProximity?: number, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/doc';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToDoc.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (addReturnToLineEnd !== undefined && null !== addReturnToLineEnd) {
            localVarQueryParameters['addReturnToLineEnd'] = ObjectSerializer.serialize(addReturnToLineEnd, "boolean");
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (imageResolutionX !== undefined && null !== imageResolutionX) {
            localVarQueryParameters['imageResolutionX'] = ObjectSerializer.serialize(imageResolutionX, "number");
        }

        if (imageResolutionY !== undefined && null !== imageResolutionY) {
            localVarQueryParameters['imageResolutionY'] = ObjectSerializer.serialize(imageResolutionY, "number");
        }

        if (maxDistanceBetweenTextLines !== undefined && null !== maxDistanceBetweenTextLines) {
            localVarQueryParameters['maxDistanceBetweenTextLines'] = ObjectSerializer.serialize(maxDistanceBetweenTextLines, "number");
        }

        if (mode !== undefined && null !== mode) {
            localVarQueryParameters['mode'] = ObjectSerializer.serialize(mode, "string");
        }

        if (recognizeBullets !== undefined && null !== recognizeBullets) {
            localVarQueryParameters['recognizeBullets'] = ObjectSerializer.serialize(recognizeBullets, "boolean");
        }

        if (relativeHorizontalProximity !== undefined && null !== relativeHorizontalProximity) {
            localVarQueryParameters['relativeHorizontalProximity'] = ObjectSerializer.serialize(relativeHorizontalProximity, "number");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.epub)
     * @param contentRecognitionMode ??roperty tunes conversion for this or that desirable method of recognition of content.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToEpub (outPath: string, contentRecognitionMode?: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/epub';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToEpub.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (contentRecognitionMode !== undefined && null !== contentRecognitionMode) {
            localVarQueryParameters['contentRecognitionMode'] = ObjectSerializer.serialize(contentRecognitionMode, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to Html format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.html)
     * @param additionalMarginWidthInPoints Defines width of margin that will be forcibly left around that output HTML-areas.
     * @param compressSvgGraphicsIfAny The flag that indicates whether found SVG graphics(if any) will be compressed(zipped) into SVGZ format during saving.
     * @param convertMarkedContentToLayers If attribute ConvertMarkedContentToLayers set to true then an all elements inside a PDF marked content (layer) will be put into an HTML div with \&quot;data-pdflayer\&quot; attribute specifying a layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content.
     * @param defaultFontName Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used.
     * @param documentType Result document type.
     * @param fixedLayout The value indicating whether that HTML is created as fixed layout.
     * @param imageResolution Resolution for image rendering.
     * @param minimalLineWidth This attribute sets minimal width of graphic path line. If thickness of line is less than 1px Adobe Acrobat rounds it to this value. So this attribute can be used to emulate this behavior for HTML browsers.
     * @param preventGlyphsGrouping This attribute switch on the mode when text glyphs will not be grouped into words and strings This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of FixedLayout attribute is true.
     * @param splitCssIntoPages When multipage-mode selected(i.e &#39;SplitIntoPages&#39; is &#39;true&#39;), then this attribute defines whether should be created separate CSS-file for each result HTML page.
     * @param splitIntoPages The flag that indicates whether each page of source document will be converted into it&#39;s own target HTML document, i.e whether result HTML will be splitted into several HTML-pages.
     * @param useZOrder If attribute UseZORder set to true, graphics and text are added to resultant HTML document accordingly Z-order in original PDF document. If this attribute is false all graphics is put as single layer which may cause some unnecessary effects for overlapped objects.
     * @param antialiasingProcessing The parameter defines required antialiasing measures during conversion of compound background images from PDF to HTML.
     * @param cssClassNamesPrefix When PDFtoHTML converter generates result CSSs, CSS class names (something like \&quot;.stl_01 {}\&quot; ... \&quot;.stl_NN {}) are generated and used in result CSS. This property allows forcibly set class name prefix.
     * @param explicitListOfSavedPages With this property You can explicitely define what pages of document should be converted. Pages in this list must have 1-based numbers. I.e. valid numbers of pages must be taken from range (1...[NumberOfPagesInConvertedDocument]) Order of appearing of pages in this list does not affect their order in result HTML page(s) - in result pages allways will go in order in which they are present in source PDF.
     * @param fontEncodingStrategy Defines encoding special rule to tune PDF decoding for current document.
     * @param fontSavingMode Defines font saving mode that will be used during saving of PDF to desirable format.
     * @param htmlMarkupGenerationMode Sometimes specific reqirments to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments.
     * @param lettersPositioningMethod The mode of positioning of letters in words in result HTML.
     * @param pagesFlowTypeDependsOnViewersScreenSize If attribute &#39;SplitOnPages&#x3D;false&#39;, than whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such way that flow of areas that represent PDF pages in result HTML will depend on screen resolution of viewer.
     * @param partsEmbeddingMode It defines whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities.
     * @param rasterImagesSavingMode Converted PDF can contain raster images This parameter defines how they should be handled during conversion of PDF to HTML.
     * @param removeEmptyAreasOnTopAndBottom Defines whether in created HTML will be removed top and bottom empty area without any content (if any).
     * @param saveShadowedTextsAsTransparentTexts Pdf can contain texts that are shadowed by another elements (f.e. by images) but can be selected to clipboard in Acrobat Reader (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML to mimic behaviour of Acrobat Reader (othervise such texts are usually saved as hidden, not available for copying to clipboard).
     * @param saveTransparentTexts Pdf can contain transparent texts that can be selected to clipboard (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML.
     * @param specialFolderForAllImages The path to directory to which must be saved any images if they are encountered during saving of document as HTML. If parameter is empty or null then image files(if any) wil be saved together with other files linked to HTML It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.
     * @param specialFolderForSvgImages The path to directory to which must be saved only SVG-images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG files(if any) wil be saved together with other image-files (near to output file) or in special folder for images (if it specified in SpecialImagesFolderIfAny option). It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.
     * @param trySaveTextUnderliningAndStrikeoutingInCss PDF itself does not contain underlining markers for texts. It emulated with line situated under text. This option allows converter try guess that this or that line is a text&#39;s underlining and put this info into CSS instead of drawing of underlining graphically.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToHtml (outPath: string, additionalMarginWidthInPoints?: number, compressSvgGraphicsIfAny?: boolean, convertMarkedContentToLayers?: boolean, defaultFontName?: string, documentType?: string, fixedLayout?: boolean, imageResolution?: number, minimalLineWidth?: number, preventGlyphsGrouping?: boolean, splitCssIntoPages?: boolean, splitIntoPages?: boolean, useZOrder?: boolean, antialiasingProcessing?: string, cssClassNamesPrefix?: string, explicitListOfSavedPages?: Array<number>, fontEncodingStrategy?: string, fontSavingMode?: string, htmlMarkupGenerationMode?: string, lettersPositioningMethod?: string, pagesFlowTypeDependsOnViewersScreenSize?: boolean, partsEmbeddingMode?: string, rasterImagesSavingMode?: string, removeEmptyAreasOnTopAndBottom?: boolean, saveShadowedTextsAsTransparentTexts?: boolean, saveTransparentTexts?: boolean, specialFolderForAllImages?: string, specialFolderForSvgImages?: string, trySaveTextUnderliningAndStrikeoutingInCss?: boolean, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/html';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToHtml.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (additionalMarginWidthInPoints !== undefined && null !== additionalMarginWidthInPoints) {
            localVarQueryParameters['additionalMarginWidthInPoints'] = ObjectSerializer.serialize(additionalMarginWidthInPoints, "number");
        }

        if (compressSvgGraphicsIfAny !== undefined && null !== compressSvgGraphicsIfAny) {
            localVarQueryParameters['compressSvgGraphicsIfAny'] = ObjectSerializer.serialize(compressSvgGraphicsIfAny, "boolean");
        }

        if (convertMarkedContentToLayers !== undefined && null !== convertMarkedContentToLayers) {
            localVarQueryParameters['convertMarkedContentToLayers'] = ObjectSerializer.serialize(convertMarkedContentToLayers, "boolean");
        }

        if (defaultFontName !== undefined && null !== defaultFontName) {
            localVarQueryParameters['defaultFontName'] = ObjectSerializer.serialize(defaultFontName, "string");
        }

        if (documentType !== undefined && null !== documentType) {
            localVarQueryParameters['documentType'] = ObjectSerializer.serialize(documentType, "string");
        }

        if (fixedLayout !== undefined && null !== fixedLayout) {
            localVarQueryParameters['fixedLayout'] = ObjectSerializer.serialize(fixedLayout, "boolean");
        }

        if (imageResolution !== undefined && null !== imageResolution) {
            localVarQueryParameters['imageResolution'] = ObjectSerializer.serialize(imageResolution, "number");
        }

        if (minimalLineWidth !== undefined && null !== minimalLineWidth) {
            localVarQueryParameters['minimalLineWidth'] = ObjectSerializer.serialize(minimalLineWidth, "number");
        }

        if (preventGlyphsGrouping !== undefined && null !== preventGlyphsGrouping) {
            localVarQueryParameters['preventGlyphsGrouping'] = ObjectSerializer.serialize(preventGlyphsGrouping, "boolean");
        }

        if (splitCssIntoPages !== undefined && null !== splitCssIntoPages) {
            localVarQueryParameters['splitCssIntoPages'] = ObjectSerializer.serialize(splitCssIntoPages, "boolean");
        }

        if (splitIntoPages !== undefined && null !== splitIntoPages) {
            localVarQueryParameters['splitIntoPages'] = ObjectSerializer.serialize(splitIntoPages, "boolean");
        }

        if (useZOrder !== undefined && null !== useZOrder) {
            localVarQueryParameters['useZOrder'] = ObjectSerializer.serialize(useZOrder, "boolean");
        }

        if (antialiasingProcessing !== undefined && null !== antialiasingProcessing) {
            localVarQueryParameters['antialiasingProcessing'] = ObjectSerializer.serialize(antialiasingProcessing, "string");
        }

        if (cssClassNamesPrefix !== undefined && null !== cssClassNamesPrefix) {
            localVarQueryParameters['cssClassNamesPrefix'] = ObjectSerializer.serialize(cssClassNamesPrefix, "string");
        }

        if (explicitListOfSavedPages !== undefined && null !== explicitListOfSavedPages) {
            localVarQueryParameters['explicitListOfSavedPages'] = ObjectSerializer.serialize(explicitListOfSavedPages, "Array<number>");
        }

        if (fontEncodingStrategy !== undefined && null !== fontEncodingStrategy) {
            localVarQueryParameters['fontEncodingStrategy'] = ObjectSerializer.serialize(fontEncodingStrategy, "string");
        }

        if (fontSavingMode !== undefined && null !== fontSavingMode) {
            localVarQueryParameters['fontSavingMode'] = ObjectSerializer.serialize(fontSavingMode, "string");
        }

        if (htmlMarkupGenerationMode !== undefined && null !== htmlMarkupGenerationMode) {
            localVarQueryParameters['htmlMarkupGenerationMode'] = ObjectSerializer.serialize(htmlMarkupGenerationMode, "string");
        }

        if (lettersPositioningMethod !== undefined && null !== lettersPositioningMethod) {
            localVarQueryParameters['lettersPositioningMethod'] = ObjectSerializer.serialize(lettersPositioningMethod, "string");
        }

        if (pagesFlowTypeDependsOnViewersScreenSize !== undefined && null !== pagesFlowTypeDependsOnViewersScreenSize) {
            localVarQueryParameters['pagesFlowTypeDependsOnViewersScreenSize'] = ObjectSerializer.serialize(pagesFlowTypeDependsOnViewersScreenSize, "boolean");
        }

        if (partsEmbeddingMode !== undefined && null !== partsEmbeddingMode) {
            localVarQueryParameters['partsEmbeddingMode'] = ObjectSerializer.serialize(partsEmbeddingMode, "string");
        }

        if (rasterImagesSavingMode !== undefined && null !== rasterImagesSavingMode) {
            localVarQueryParameters['rasterImagesSavingMode'] = ObjectSerializer.serialize(rasterImagesSavingMode, "string");
        }

        if (removeEmptyAreasOnTopAndBottom !== undefined && null !== removeEmptyAreasOnTopAndBottom) {
            localVarQueryParameters['removeEmptyAreasOnTopAndBottom'] = ObjectSerializer.serialize(removeEmptyAreasOnTopAndBottom, "boolean");
        }

        if (saveShadowedTextsAsTransparentTexts !== undefined && null !== saveShadowedTextsAsTransparentTexts) {
            localVarQueryParameters['saveShadowedTextsAsTransparentTexts'] = ObjectSerializer.serialize(saveShadowedTextsAsTransparentTexts, "boolean");
        }

        if (saveTransparentTexts !== undefined && null !== saveTransparentTexts) {
            localVarQueryParameters['saveTransparentTexts'] = ObjectSerializer.serialize(saveTransparentTexts, "boolean");
        }

        if (specialFolderForAllImages !== undefined && null !== specialFolderForAllImages) {
            localVarQueryParameters['specialFolderForAllImages'] = ObjectSerializer.serialize(specialFolderForAllImages, "string");
        }

        if (specialFolderForSvgImages !== undefined && null !== specialFolderForSvgImages) {
            localVarQueryParameters['specialFolderForSvgImages'] = ObjectSerializer.serialize(specialFolderForSvgImages, "string");
        }

        if (trySaveTextUnderliningAndStrikeoutingInCss !== undefined && null !== trySaveTextUnderliningAndStrikeoutingInCss) {
            localVarQueryParameters['trySaveTextUnderliningAndStrikeoutingInCss'] = ObjectSerializer.serialize(trySaveTextUnderliningAndStrikeoutingInCss, "boolean");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to LaTeX format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.tex)
     * @param pagesCount Pages count.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToLaTeX (outPath: string, pagesCount?: number, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/latex';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToLaTeX.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (pagesCount !== undefined && null !== pagesCount) {
            localVarQueryParameters['pagesCount'] = ObjectSerializer.serialize(pagesCount, "number");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to MOBIXML format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.mobixml)
     * @param file A file to be converted.
     */
    public async putPdfInRequestToMobiXml (outPath: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/mobixml';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToMobiXml.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to PdfA format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param type Type of PdfA format.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToPdfA (outPath: string, type: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/pdfa';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToPdfA.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling putPdfInRequestToPdfA.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (type !== undefined && null !== type) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pptx)
     * @param separateImages Separate images.
     * @param slidesAsImages Slides as images.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToPptx (outPath: string, separateImages?: boolean, slidesAsImages?: boolean, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/pptx';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToPptx.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (separateImages !== undefined && null !== separateImages) {
            localVarQueryParameters['separateImages'] = ObjectSerializer.serialize(separateImages, "boolean");
        }

        if (slidesAsImages !== undefined && null !== slidesAsImages) {
            localVarQueryParameters['slidesAsImages'] = ObjectSerializer.serialize(slidesAsImages, "boolean");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to SVG format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.svg)
     * @param compressOutputToZipArchive Specifies whether output will be created as one zip-archive.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToSvg (outPath: string, compressOutputToZipArchive?: boolean, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/svg';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToSvg.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (compressOutputToZipArchive !== undefined && null !== compressOutputToZipArchive) {
            localVarQueryParameters['compressOutputToZipArchive'] = ObjectSerializer.serialize(compressOutputToZipArchive, "boolean");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to TIFF format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.tiff)
     * @param brightness Image brightness.
     * @param compression Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None.
     * @param colorDepth Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp.
     * @param leftMargin Left image margin.
     * @param rightMargin Right image margin.
     * @param topMargin Top image margin.
     * @param bottomMargin Bottom image margin.
     * @param orientation Image orientation. Possible values are: None, Landscape, Portait.
     * @param skipBlankPages Skip blank pages flag.
     * @param width Image width.
     * @param height Image height.
     * @param xResolution Horizontal resolution.
     * @param yResolution Vertical resolution.
     * @param pageIndex Start page to export.
     * @param pageCount Number of pages to export.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToTiff (outPath: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/tiff';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToTiff.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (brightness !== undefined && null !== brightness) {
            localVarQueryParameters['brightness'] = ObjectSerializer.serialize(brightness, "number");
        }

        if (compression !== undefined && null !== compression) {
            localVarQueryParameters['compression'] = ObjectSerializer.serialize(compression, "string");
        }

        if (colorDepth !== undefined && null !== colorDepth) {
            localVarQueryParameters['colorDepth'] = ObjectSerializer.serialize(colorDepth, "string");
        }

        if (leftMargin !== undefined && null !== leftMargin) {
            localVarQueryParameters['leftMargin'] = ObjectSerializer.serialize(leftMargin, "number");
        }

        if (rightMargin !== undefined && null !== rightMargin) {
            localVarQueryParameters['rightMargin'] = ObjectSerializer.serialize(rightMargin, "number");
        }

        if (topMargin !== undefined && null !== topMargin) {
            localVarQueryParameters['topMargin'] = ObjectSerializer.serialize(topMargin, "number");
        }

        if (bottomMargin !== undefined && null !== bottomMargin) {
            localVarQueryParameters['bottomMargin'] = ObjectSerializer.serialize(bottomMargin, "number");
        }

        if (orientation !== undefined && null !== orientation) {
            localVarQueryParameters['orientation'] = ObjectSerializer.serialize(orientation, "string");
        }

        if (skipBlankPages !== undefined && null !== skipBlankPages) {
            localVarQueryParameters['skipBlankPages'] = ObjectSerializer.serialize(skipBlankPages, "boolean");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (xResolution !== undefined && null !== xResolution) {
            localVarQueryParameters['xResolution'] = ObjectSerializer.serialize(xResolution, "number");
        }

        if (yResolution !== undefined && null !== yResolution) {
            localVarQueryParameters['yResolution'] = ObjectSerializer.serialize(yResolution, "number");
        }

        if (pageIndex !== undefined && null !== pageIndex) {
            localVarQueryParameters['pageIndex'] = ObjectSerializer.serialize(pageIndex, "number");
        }

        if (pageCount !== undefined && null !== pageCount) {
            localVarQueryParameters['pageCount'] = ObjectSerializer.serialize(pageCount, "number");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to XLS format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xls)
     * @param insertBlankColumnAtFirst Insert blank column at first
     * @param minimizeTheNumberOfWorksheets Minimize the number of worksheets
     * @param scaleFactor Scale factor
     * @param uniformWorksheets Uniform worksheets
     * @param file A file to be converted.
     */
    public async putPdfInRequestToXls (outPath: string, insertBlankColumnAtFirst?: boolean, minimizeTheNumberOfWorksheets?: boolean, scaleFactor?: number, uniformWorksheets?: boolean, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/xls';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToXls.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (insertBlankColumnAtFirst !== undefined && null !== insertBlankColumnAtFirst) {
            localVarQueryParameters['insertBlankColumnAtFirst'] = ObjectSerializer.serialize(insertBlankColumnAtFirst, "boolean");
        }

        if (minimizeTheNumberOfWorksheets !== undefined && null !== minimizeTheNumberOfWorksheets) {
            localVarQueryParameters['minimizeTheNumberOfWorksheets'] = ObjectSerializer.serialize(minimizeTheNumberOfWorksheets, "boolean");
        }

        if (scaleFactor !== undefined && null !== scaleFactor) {
            localVarQueryParameters['scaleFactor'] = ObjectSerializer.serialize(scaleFactor, "number");
        }

        if (uniformWorksheets !== undefined && null !== uniformWorksheets) {
            localVarQueryParameters['uniformWorksheets'] = ObjectSerializer.serialize(uniformWorksheets, "boolean");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to XML format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xml)
     * @param file A file to be converted.
     */
    public async putPdfInRequestToXml (outPath: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/xml';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToXml.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to XPS format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xps)
     * @param file A file to be converted.
     */
    public async putPdfInRequestToXps (outPath: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/xps';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInRequestToXps.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to DOC format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.doc)
     * @param addReturnToLineEnd Add return to line end.
     * @param format Allows to specify .doc or .docx file format.
     * @param imageResolutionX Image resolution X.
     * @param imageResolutionY Image resolution Y.
     * @param maxDistanceBetweenTextLines Max distance between text lines.
     * @param mode Allows to control how a PDF document is converted into a word processing document.
     * @param recognizeBullets Recognize bullets.
     * @param relativeHorizontalProximity Relative horizontal proximity.
     * @param folder The document folder.
     */
    public async putPdfInStorageToDoc (name: string, outPath: string, addReturnToLineEnd?: boolean, format?: string, imageResolutionX?: number, imageResolutionY?: number, maxDistanceBetweenTextLines?: number, mode?: string, recognizeBullets?: boolean, relativeHorizontalProximity?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/doc'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToDoc.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToDoc.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (addReturnToLineEnd !== undefined && null !== addReturnToLineEnd) {
            localVarQueryParameters['addReturnToLineEnd'] = ObjectSerializer.serialize(addReturnToLineEnd, "boolean");
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "string");
        }

        if (imageResolutionX !== undefined && null !== imageResolutionX) {
            localVarQueryParameters['imageResolutionX'] = ObjectSerializer.serialize(imageResolutionX, "number");
        }

        if (imageResolutionY !== undefined && null !== imageResolutionY) {
            localVarQueryParameters['imageResolutionY'] = ObjectSerializer.serialize(imageResolutionY, "number");
        }

        if (maxDistanceBetweenTextLines !== undefined && null !== maxDistanceBetweenTextLines) {
            localVarQueryParameters['maxDistanceBetweenTextLines'] = ObjectSerializer.serialize(maxDistanceBetweenTextLines, "number");
        }

        if (mode !== undefined && null !== mode) {
            localVarQueryParameters['mode'] = ObjectSerializer.serialize(mode, "string");
        }

        if (recognizeBullets !== undefined && null !== recognizeBullets) {
            localVarQueryParameters['recognizeBullets'] = ObjectSerializer.serialize(recognizeBullets, "boolean");
        }

        if (relativeHorizontalProximity !== undefined && null !== relativeHorizontalProximity) {
            localVarQueryParameters['relativeHorizontalProximity'] = ObjectSerializer.serialize(relativeHorizontalProximity, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.epub)
     * @param contentRecognitionMode ??roperty tunes conversion for this or that desirable method of recognition of content.
     * @param folder The document folder.
     */
    public async putPdfInStorageToEpub (name: string, outPath: string, contentRecognitionMode?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/epub'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToEpub.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToEpub.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (contentRecognitionMode !== undefined && null !== contentRecognitionMode) {
            localVarQueryParameters['contentRecognitionMode'] = ObjectSerializer.serialize(contentRecognitionMode, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to Html format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.html)
     * @param additionalMarginWidthInPoints Defines width of margin that will be forcibly left around that output HTML-areas.
     * @param compressSvgGraphicsIfAny The flag that indicates whether found SVG graphics(if any) will be compressed(zipped) into SVGZ format during saving.
     * @param convertMarkedContentToLayers If attribute ConvertMarkedContentToLayers set to true then an all elements inside a PDF marked content (layer) will be put into an HTML div with \&quot;data-pdflayer\&quot; attribute specifying a layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content.
     * @param defaultFontName Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used.
     * @param documentType Result document type.
     * @param fixedLayout The value indicating whether that HTML is created as fixed layout.
     * @param imageResolution Resolution for image rendering.
     * @param minimalLineWidth This attribute sets minimal width of graphic path line. If thickness of line is less than 1px Adobe Acrobat rounds it to this value. So this attribute can be used to emulate this behavior for HTML browsers.
     * @param preventGlyphsGrouping This attribute switch on the mode when text glyphs will not be grouped into words and strings This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of FixedLayout attribute is true.
     * @param splitCssIntoPages When multipage-mode selected(i.e &#39;SplitIntoPages&#39; is &#39;true&#39;), then this attribute defines whether should be created separate CSS-file for each result HTML page.
     * @param splitIntoPages The flag that indicates whether each page of source document will be converted into it&#39;s own target HTML document, i.e whether result HTML will be splitted into several HTML-pages.
     * @param useZOrder If attribute UseZORder set to true, graphics and text are added to resultant HTML document accordingly Z-order in original PDF document. If this attribute is false all graphics is put as single layer which may cause some unnecessary effects for overlapped objects.
     * @param antialiasingProcessing The parameter defines required antialiasing measures during conversion of compound background images from PDF to HTML.
     * @param cssClassNamesPrefix When PDFtoHTML converter generates result CSSs, CSS class names (something like \&quot;.stl_01 {}\&quot; ... \&quot;.stl_NN {}) are generated and used in result CSS. This property allows forcibly set class name prefix.
     * @param explicitListOfSavedPages With this property You can explicitely define what pages of document should be converted. Pages in this list must have 1-based numbers. I.e. valid numbers of pages must be taken from range (1...[NumberOfPagesInConvertedDocument]) Order of appearing of pages in this list does not affect their order in result HTML page(s) - in result pages allways will go in order in which they are present in source PDF.
     * @param fontEncodingStrategy Defines encoding special rule to tune PDF decoding for current document.
     * @param fontSavingMode Defines font saving mode that will be used during saving of PDF to desirable format.
     * @param htmlMarkupGenerationMode Sometimes specific reqirments to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirments.
     * @param lettersPositioningMethod The mode of positioning of letters in words in result HTML.
     * @param pagesFlowTypeDependsOnViewersScreenSize If attribute &#39;SplitOnPages&#x3D;false&#39;, than whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such way that flow of areas that represent PDF pages in result HTML will depend on screen resolution of viewer.
     * @param partsEmbeddingMode It defines whether referenced files (HTML, Fonts,Images, CSSes) will be embedded into main HTML file or will be generated as apart binary entities.
     * @param rasterImagesSavingMode Converted PDF can contain raster images This parameter defines how they should be handled during conversion of PDF to HTML.
     * @param removeEmptyAreasOnTopAndBottom Defines whether in created HTML will be removed top and bottom empty area without any content (if any).
     * @param saveShadowedTextsAsTransparentTexts Pdf can contain texts that are shadowed by another elements (f.e. by images) but can be selected to clipboard in Acrobat Reader (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML to mimic behaviour of Acrobat Reader (othervise such texts are usually saved as hidden, not available for copying to clipboard).
     * @param saveTransparentTexts Pdf can contain transparent texts that can be selected to clipboard (usually it happen when document contains images and OCRed texts extracted from it). This settings tells to converter whether we need save such texts as transparent selectable texts in result HTML.
     * @param specialFolderForAllImages The path to directory to which must be saved any images if they are encountered during saving of document as HTML. If parameter is empty or null then image files(if any) wil be saved together with other files linked to HTML It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.
     * @param specialFolderForSvgImages The path to directory to which must be saved only SVG-images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG files(if any) wil be saved together with other image-files (near to output file) or in special folder for images (if it specified in SpecialImagesFolderIfAny option). It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.
     * @param trySaveTextUnderliningAndStrikeoutingInCss PDF itself does not contain underlining markers for texts. It emulated with line situated under text. This option allows converter try guess that this or that line is a text&#39;s underlining and put this info into CSS instead of drawing of underlining graphically.
     * @param folder The document folder.
     */
    public async putPdfInStorageToHtml (name: string, outPath: string, additionalMarginWidthInPoints?: number, compressSvgGraphicsIfAny?: boolean, convertMarkedContentToLayers?: boolean, defaultFontName?: string, documentType?: string, fixedLayout?: boolean, imageResolution?: number, minimalLineWidth?: number, preventGlyphsGrouping?: boolean, splitCssIntoPages?: boolean, splitIntoPages?: boolean, useZOrder?: boolean, antialiasingProcessing?: string, cssClassNamesPrefix?: string, explicitListOfSavedPages?: Array<number>, fontEncodingStrategy?: string, fontSavingMode?: string, htmlMarkupGenerationMode?: string, lettersPositioningMethod?: string, pagesFlowTypeDependsOnViewersScreenSize?: boolean, partsEmbeddingMode?: string, rasterImagesSavingMode?: string, removeEmptyAreasOnTopAndBottom?: boolean, saveShadowedTextsAsTransparentTexts?: boolean, saveTransparentTexts?: boolean, specialFolderForAllImages?: string, specialFolderForSvgImages?: string, trySaveTextUnderliningAndStrikeoutingInCss?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/html'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToHtml.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToHtml.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (additionalMarginWidthInPoints !== undefined && null !== additionalMarginWidthInPoints) {
            localVarQueryParameters['additionalMarginWidthInPoints'] = ObjectSerializer.serialize(additionalMarginWidthInPoints, "number");
        }

        if (compressSvgGraphicsIfAny !== undefined && null !== compressSvgGraphicsIfAny) {
            localVarQueryParameters['compressSvgGraphicsIfAny'] = ObjectSerializer.serialize(compressSvgGraphicsIfAny, "boolean");
        }

        if (convertMarkedContentToLayers !== undefined && null !== convertMarkedContentToLayers) {
            localVarQueryParameters['convertMarkedContentToLayers'] = ObjectSerializer.serialize(convertMarkedContentToLayers, "boolean");
        }

        if (defaultFontName !== undefined && null !== defaultFontName) {
            localVarQueryParameters['defaultFontName'] = ObjectSerializer.serialize(defaultFontName, "string");
        }

        if (documentType !== undefined && null !== documentType) {
            localVarQueryParameters['documentType'] = ObjectSerializer.serialize(documentType, "string");
        }

        if (fixedLayout !== undefined && null !== fixedLayout) {
            localVarQueryParameters['fixedLayout'] = ObjectSerializer.serialize(fixedLayout, "boolean");
        }

        if (imageResolution !== undefined && null !== imageResolution) {
            localVarQueryParameters['imageResolution'] = ObjectSerializer.serialize(imageResolution, "number");
        }

        if (minimalLineWidth !== undefined && null !== minimalLineWidth) {
            localVarQueryParameters['minimalLineWidth'] = ObjectSerializer.serialize(minimalLineWidth, "number");
        }

        if (preventGlyphsGrouping !== undefined && null !== preventGlyphsGrouping) {
            localVarQueryParameters['preventGlyphsGrouping'] = ObjectSerializer.serialize(preventGlyphsGrouping, "boolean");
        }

        if (splitCssIntoPages !== undefined && null !== splitCssIntoPages) {
            localVarQueryParameters['splitCssIntoPages'] = ObjectSerializer.serialize(splitCssIntoPages, "boolean");
        }

        if (splitIntoPages !== undefined && null !== splitIntoPages) {
            localVarQueryParameters['splitIntoPages'] = ObjectSerializer.serialize(splitIntoPages, "boolean");
        }

        if (useZOrder !== undefined && null !== useZOrder) {
            localVarQueryParameters['useZOrder'] = ObjectSerializer.serialize(useZOrder, "boolean");
        }

        if (antialiasingProcessing !== undefined && null !== antialiasingProcessing) {
            localVarQueryParameters['antialiasingProcessing'] = ObjectSerializer.serialize(antialiasingProcessing, "string");
        }

        if (cssClassNamesPrefix !== undefined && null !== cssClassNamesPrefix) {
            localVarQueryParameters['cssClassNamesPrefix'] = ObjectSerializer.serialize(cssClassNamesPrefix, "string");
        }

        if (explicitListOfSavedPages !== undefined && null !== explicitListOfSavedPages) {
            localVarQueryParameters['explicitListOfSavedPages'] = ObjectSerializer.serialize(explicitListOfSavedPages, "Array<number>");
        }

        if (fontEncodingStrategy !== undefined && null !== fontEncodingStrategy) {
            localVarQueryParameters['fontEncodingStrategy'] = ObjectSerializer.serialize(fontEncodingStrategy, "string");
        }

        if (fontSavingMode !== undefined && null !== fontSavingMode) {
            localVarQueryParameters['fontSavingMode'] = ObjectSerializer.serialize(fontSavingMode, "string");
        }

        if (htmlMarkupGenerationMode !== undefined && null !== htmlMarkupGenerationMode) {
            localVarQueryParameters['htmlMarkupGenerationMode'] = ObjectSerializer.serialize(htmlMarkupGenerationMode, "string");
        }

        if (lettersPositioningMethod !== undefined && null !== lettersPositioningMethod) {
            localVarQueryParameters['lettersPositioningMethod'] = ObjectSerializer.serialize(lettersPositioningMethod, "string");
        }

        if (pagesFlowTypeDependsOnViewersScreenSize !== undefined && null !== pagesFlowTypeDependsOnViewersScreenSize) {
            localVarQueryParameters['pagesFlowTypeDependsOnViewersScreenSize'] = ObjectSerializer.serialize(pagesFlowTypeDependsOnViewersScreenSize, "boolean");
        }

        if (partsEmbeddingMode !== undefined && null !== partsEmbeddingMode) {
            localVarQueryParameters['partsEmbeddingMode'] = ObjectSerializer.serialize(partsEmbeddingMode, "string");
        }

        if (rasterImagesSavingMode !== undefined && null !== rasterImagesSavingMode) {
            localVarQueryParameters['rasterImagesSavingMode'] = ObjectSerializer.serialize(rasterImagesSavingMode, "string");
        }

        if (removeEmptyAreasOnTopAndBottom !== undefined && null !== removeEmptyAreasOnTopAndBottom) {
            localVarQueryParameters['removeEmptyAreasOnTopAndBottom'] = ObjectSerializer.serialize(removeEmptyAreasOnTopAndBottom, "boolean");
        }

        if (saveShadowedTextsAsTransparentTexts !== undefined && null !== saveShadowedTextsAsTransparentTexts) {
            localVarQueryParameters['saveShadowedTextsAsTransparentTexts'] = ObjectSerializer.serialize(saveShadowedTextsAsTransparentTexts, "boolean");
        }

        if (saveTransparentTexts !== undefined && null !== saveTransparentTexts) {
            localVarQueryParameters['saveTransparentTexts'] = ObjectSerializer.serialize(saveTransparentTexts, "boolean");
        }

        if (specialFolderForAllImages !== undefined && null !== specialFolderForAllImages) {
            localVarQueryParameters['specialFolderForAllImages'] = ObjectSerializer.serialize(specialFolderForAllImages, "string");
        }

        if (specialFolderForSvgImages !== undefined && null !== specialFolderForSvgImages) {
            localVarQueryParameters['specialFolderForSvgImages'] = ObjectSerializer.serialize(specialFolderForSvgImages, "string");
        }

        if (trySaveTextUnderliningAndStrikeoutingInCss !== undefined && null !== trySaveTextUnderliningAndStrikeoutingInCss) {
            localVarQueryParameters['trySaveTextUnderliningAndStrikeoutingInCss'] = ObjectSerializer.serialize(trySaveTextUnderliningAndStrikeoutingInCss, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to LaTeX format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.tex)
     * @param pagesCount Pages count.
     * @param folder The document folder.
     */
    public async putPdfInStorageToLaTeX (name: string, outPath: string, pagesCount?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/latex'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToLaTeX.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToLaTeX.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (pagesCount !== undefined && null !== pagesCount) {
            localVarQueryParameters['pagesCount'] = ObjectSerializer.serialize(pagesCount, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to MOBIXML format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.mobixml)
     * @param folder The document folder.
     */
    public async putPdfInStorageToMobiXml (name: string, outPath: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/mobixml'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToMobiXml.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToMobiXml.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to PdfA format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param type Type of PdfA format.
     * @param folder The document folder.
     */
    public async putPdfInStorageToPdfA (name: string, outPath: string, type: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/pdfa'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToPdfA.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToPdfA.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling putPdfInStorageToPdfA.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (type !== undefined && null !== type) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to PPTX format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pptx)
     * @param separateImages Separate images.
     * @param slidesAsImages Slides as images.
     * @param folder The document folder.
     */
    public async putPdfInStorageToPptx (name: string, outPath: string, separateImages?: boolean, slidesAsImages?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/pptx'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToPptx.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToPptx.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (separateImages !== undefined && null !== separateImages) {
            localVarQueryParameters['separateImages'] = ObjectSerializer.serialize(separateImages, "boolean");
        }

        if (slidesAsImages !== undefined && null !== slidesAsImages) {
            localVarQueryParameters['slidesAsImages'] = ObjectSerializer.serialize(slidesAsImages, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to SVG format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.svg)
     * @param compressOutputToZipArchive Specifies whether output will be created as one zip-archive.
     * @param folder The document folder.
     */
    public async putPdfInStorageToSvg (name: string, outPath: string, compressOutputToZipArchive?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/svg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToSvg.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToSvg.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (compressOutputToZipArchive !== undefined && null !== compressOutputToZipArchive) {
            localVarQueryParameters['compressOutputToZipArchive'] = ObjectSerializer.serialize(compressOutputToZipArchive, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to TIFF format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.tiff)
     * @param brightness Image brightness.
     * @param compression Tiff compression. Possible values are: LZW, CCITT4, CCITT3, RLE, None.
     * @param colorDepth Image color depth. Possible valuse are: Default, Format8bpp, Format4bpp, Format1bpp.
     * @param leftMargin Left image margin.
     * @param rightMargin Right image margin.
     * @param topMargin Top image margin.
     * @param bottomMargin Bottom image margin.
     * @param orientation Image orientation. Possible values are: None, Landscape, Portait.
     * @param skipBlankPages Skip blank pages flag.
     * @param width Image width.
     * @param height Image height.
     * @param xResolution Horizontal resolution.
     * @param yResolution Vertical resolution.
     * @param pageIndex Start page to export.
     * @param pageCount Number of pages to export.
     * @param folder The document folder.
     */
    public async putPdfInStorageToTiff (name: string, outPath: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToTiff.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToTiff.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (brightness !== undefined && null !== brightness) {
            localVarQueryParameters['brightness'] = ObjectSerializer.serialize(brightness, "number");
        }

        if (compression !== undefined && null !== compression) {
            localVarQueryParameters['compression'] = ObjectSerializer.serialize(compression, "string");
        }

        if (colorDepth !== undefined && null !== colorDepth) {
            localVarQueryParameters['colorDepth'] = ObjectSerializer.serialize(colorDepth, "string");
        }

        if (leftMargin !== undefined && null !== leftMargin) {
            localVarQueryParameters['leftMargin'] = ObjectSerializer.serialize(leftMargin, "number");
        }

        if (rightMargin !== undefined && null !== rightMargin) {
            localVarQueryParameters['rightMargin'] = ObjectSerializer.serialize(rightMargin, "number");
        }

        if (topMargin !== undefined && null !== topMargin) {
            localVarQueryParameters['topMargin'] = ObjectSerializer.serialize(topMargin, "number");
        }

        if (bottomMargin !== undefined && null !== bottomMargin) {
            localVarQueryParameters['bottomMargin'] = ObjectSerializer.serialize(bottomMargin, "number");
        }

        if (orientation !== undefined && null !== orientation) {
            localVarQueryParameters['orientation'] = ObjectSerializer.serialize(orientation, "string");
        }

        if (skipBlankPages !== undefined && null !== skipBlankPages) {
            localVarQueryParameters['skipBlankPages'] = ObjectSerializer.serialize(skipBlankPages, "boolean");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (xResolution !== undefined && null !== xResolution) {
            localVarQueryParameters['xResolution'] = ObjectSerializer.serialize(xResolution, "number");
        }

        if (yResolution !== undefined && null !== yResolution) {
            localVarQueryParameters['yResolution'] = ObjectSerializer.serialize(yResolution, "number");
        }

        if (pageIndex !== undefined && null !== pageIndex) {
            localVarQueryParameters['pageIndex'] = ObjectSerializer.serialize(pageIndex, "number");
        }

        if (pageCount !== undefined && null !== pageCount) {
            localVarQueryParameters['pageCount'] = ObjectSerializer.serialize(pageCount, "number");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XLS format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xls)
     * @param insertBlankColumnAtFirst Insert blank column at first
     * @param minimizeTheNumberOfWorksheets Minimize the number of worksheets
     * @param scaleFactor Scale factor
     * @param uniformWorksheets Uniform worksheets
     * @param folder The document folder.
     */
    public async putPdfInStorageToXls (name: string, outPath: string, insertBlankColumnAtFirst?: boolean, minimizeTheNumberOfWorksheets?: boolean, scaleFactor?: number, uniformWorksheets?: boolean, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xls'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToXls.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToXls.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (insertBlankColumnAtFirst !== undefined && null !== insertBlankColumnAtFirst) {
            localVarQueryParameters['insertBlankColumnAtFirst'] = ObjectSerializer.serialize(insertBlankColumnAtFirst, "boolean");
        }

        if (minimizeTheNumberOfWorksheets !== undefined && null !== minimizeTheNumberOfWorksheets) {
            localVarQueryParameters['minimizeTheNumberOfWorksheets'] = ObjectSerializer.serialize(minimizeTheNumberOfWorksheets, "boolean");
        }

        if (scaleFactor !== undefined && null !== scaleFactor) {
            localVarQueryParameters['scaleFactor'] = ObjectSerializer.serialize(scaleFactor, "number");
        }

        if (uniformWorksheets !== undefined && null !== uniformWorksheets) {
            localVarQueryParameters['uniformWorksheets'] = ObjectSerializer.serialize(uniformWorksheets, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XML format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xml)
     * @param folder The document folder.
     */
    public async putPdfInStorageToXml (name: string, outPath: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xml'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToXml.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToXml.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XPS format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xps)
     * @param folder The document folder.
     */
    public async putPdfInStorageToXps (name: string, outPath: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xps'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPdfInStorageToXps.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putPdfInStorageToXps.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Update privilege document.
     * @param name The document name.
     * @param privileges Document privileges. 
     * @param folder The document folder.
     */
    public async putPrivileges (name: string, privileges?: DocumentPrivilege, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/privileges'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPrivileges.');
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(privileges, "DocumentPrivilege")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PS file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.ps)
     * @param dstFolder The destination document folder.
     */
    public async putPsInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/ps'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPsInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putPsInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Create searchable PDF document. Generate OCR layer for images in input PDF document.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param lang language for OCR engine. Possible values: eng, ara, bel, ben, bul, ces, dan, deu, ell, fin, fra, heb, hin, ind, isl, ita, jpn, kor, nld, nor, pol, por, ron, rus, spa, swe, tha, tur, ukr, vie, chi_sim, chi_tra or thier combination e.g. eng,rus 
     */
    public async putSearchableDocument (name: string, storage?: string, folder?: string, lang?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/ocr'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSearchableDocument.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (lang !== undefined && null !== lang) {
            localVarQueryParameters['lang'] = ObjectSerializer.serialize(lang, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add/update document property.
     * @param name 
     * @param propertyName 
     * @param property 
     * @param storage 
     * @param folder 
     */
    public async putSetProperty (name: string, propertyName: string, property?: DocumentProperty, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: DocumentPropertyResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/documentproperties/{propertyName}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSetProperty.');
        }

        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('Required parameter propertyName was null or undefined when calling putSetProperty.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(property, "DocumentProperty")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert SVG file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.svg)
     * @param adjustPageSize Adjust page size
     * @param height Page height
     * @param width Page width
     * @param isLandscape Is page landscaped
     * @param marginLeft Page margin left
     * @param marginBottom Page margin bottom
     * @param marginRight Page margin right
     * @param marginTop Page margin top
     * @param dstFolder The destination document folder.
     */
    public async putSvgInStorageToPdf (name: string, srcPath: string, adjustPageSize?: boolean, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/svg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSvgInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putSvgInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (adjustPageSize !== undefined && null !== adjustPageSize) {
            localVarQueryParameters['adjustPageSize'] = ObjectSerializer.serialize(adjustPageSize, "boolean");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (isLandscape !== undefined && null !== isLandscape) {
            localVarQueryParameters['isLandscape'] = ObjectSerializer.serialize(isLandscape, "boolean");
        }

        if (marginLeft !== undefined && null !== marginLeft) {
            localVarQueryParameters['marginLeft'] = ObjectSerializer.serialize(marginLeft, "number");
        }

        if (marginBottom !== undefined && null !== marginBottom) {
            localVarQueryParameters['marginBottom'] = ObjectSerializer.serialize(marginBottom, "number");
        }

        if (marginRight !== undefined && null !== marginRight) {
            localVarQueryParameters['marginRight'] = ObjectSerializer.serialize(marginRight, "number");
        }

        if (marginTop !== undefined && null !== marginTop) {
            localVarQueryParameters['marginTop'] = ObjectSerializer.serialize(marginTop, "number");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Update field.
     * @param name The document name.
     * @param fieldName The name of a field to be updated.
     * @param field with the field data.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putUpdateField (name: string, fieldName: string, field?: Field, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: FieldResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields/{fieldName}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'fieldName' + '}', encodeURIComponent(String(fieldName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putUpdateField.');
        }

        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new Error('Required parameter fieldName was null or undefined when calling putUpdateField.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(field, "Field")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Update fields.
     * @param name The document name.
     * @param fields with the fields data.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putUpdateFields (name: string, fields?: Fields, storage?: string, folder?: string) : Promise<{ response: http.ClientResponse; body: FieldsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/fields'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putUpdateFields.');
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(fields, "Fields")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert web page to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param url Source url
     * @param height Page height
     * @param width Page width
     * @param isLandscape Is page landscaped
     * @param marginLeft Page margin left
     * @param marginBottom Page margin bottom
     * @param marginRight Page margin right
     * @param marginTop Page margin top
     * @param dstFolder The destination document folder.
     */
    public async putWebInStorageToPdf (name: string, url: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/web'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putWebInStorageToPdf.');
        }

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new Error('Required parameter url was null or undefined when calling putWebInStorageToPdf.');
        }

        if (url !== undefined && null !== url) {
            localVarQueryParameters['url'] = ObjectSerializer.serialize(url, "string");
        }

        if (height !== undefined && null !== height) {
            localVarQueryParameters['height'] = ObjectSerializer.serialize(height, "number");
        }

        if (width !== undefined && null !== width) {
            localVarQueryParameters['width'] = ObjectSerializer.serialize(width, "number");
        }

        if (isLandscape !== undefined && null !== isLandscape) {
            localVarQueryParameters['isLandscape'] = ObjectSerializer.serialize(isLandscape, "boolean");
        }

        if (marginLeft !== undefined && null !== marginLeft) {
            localVarQueryParameters['marginLeft'] = ObjectSerializer.serialize(marginLeft, "number");
        }

        if (marginBottom !== undefined && null !== marginBottom) {
            localVarQueryParameters['marginBottom'] = ObjectSerializer.serialize(marginBottom, "number");
        }

        if (marginRight !== undefined && null !== marginRight) {
            localVarQueryParameters['marginRight'] = ObjectSerializer.serialize(marginRight, "number");
        }

        if (marginTop !== undefined && null !== marginTop) {
            localVarQueryParameters['marginTop'] = ObjectSerializer.serialize(marginTop, "number");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param file A file to be converted.
     */
    public async putXfaPdfInRequestToAcroForm (outPath: string, file?: Buffer) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/convert/xfatoacroform';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putXfaPdfInRequestToAcroForm.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        if (file !== undefined) {
            localVarFormParams['file'] = file;
            fileData = file;
        }
        localVarUseFormData = true;
        

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param folder The document folder.
     */
    public async putXfaPdfInStorageToAcroForm (name: string, outPath: string, folder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/convert/xfatoacroform'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putXfaPdfInStorageToAcroForm.');
        }

        // verify required parameter 'outPath' is not null or undefined
        if (outPath === null || outPath === undefined) {
            throw new Error('Required parameter outPath was null or undefined when calling putXfaPdfInStorageToAcroForm.');
        }

        if (outPath !== undefined && null !== outPath) {
            localVarQueryParameters['outPath'] = ObjectSerializer.serialize(outPath, "string");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XML file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xml)
     * @param xslFilePath Full XSL source filename (ex. /folder1/folder2/template.xsl)
     * @param dstFolder The destination document folder.
     */
    public async putXmlInStorageToPdf (name: string, srcPath: string, xslFilePath?: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/xml'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putXmlInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putXmlInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (xslFilePath !== undefined && null !== xslFilePath) {
            localVarQueryParameters['xslFilePath'] = ObjectSerializer.serialize(xslFilePath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xps)
     * @param dstFolder The destination document folder.
     */
    public async putXpsInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/xps'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putXpsInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putXpsInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xpsfo)
     * @param dstFolder The destination document folder.
     */
    public async putXslFoInStorageToPdf (name: string, srcPath: string, dstFolder?: string) : Promise<{ response: http.ClientResponse; body: SaaSposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/create/xslfo'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putXslFoInStorageToPdf.');
        }

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling putXslFoInStorageToPdf.');
        }

        if (srcPath !== undefined && null !== srcPath) {
            localVarQueryParameters['srcPath'] = ObjectSerializer.serialize(srcPath, "string");
        }

        if (dstFolder !== undefined && null !== dstFolder) {
            localVarQueryParameters['dstFolder'] = ObjectSerializer.serialize(dstFolder, "string");
        }


        let localVarUseFormData = false;
        let fileData = null;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }
}

