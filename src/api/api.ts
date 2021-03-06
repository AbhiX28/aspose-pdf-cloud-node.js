﻿ /**
 *
 *   Copyright (c) 2019 Aspose.PDF Cloud
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

import { AnnotationFlags } from "../models/annotationFlags";
import { AnnotationState } from "../models/annotationState";
import { AnnotationType } from "../models/annotationType";
import { AntialiasingProcessingType } from "../models/antialiasingProcessingType";
import { AppendDocument } from "../models/appendDocument";
import { AsposeResponse } from "../models/asposeResponse";
import { CapStyle } from "../models/capStyle";
import { CaptionPosition } from "../models/captionPosition";
import { CaretSymbol } from "../models/caretSymbol";
import { Color } from "../models/color";
import { ColorDepth } from "../models/colorDepth";
import { CompressionType } from "../models/compressionType";
import { DiscUsage } from "../models/discUsage";
import { DocFormat } from "../models/docFormat";
import { DocRecognitionMode } from "../models/docRecognitionMode";
import { DocumentPrivilege } from "../models/documentPrivilege";
import { EpubRecognitionMode } from "../models/epubRecognitionMode";
import { FieldType } from "../models/fieldType";
import { File } from "../models/file";
import { FileExist } from "../models/fileExist";
import { FileIcon } from "../models/fileIcon";
import { FontEncodingRules } from "../models/fontEncodingRules";
import { FontSavingModes } from "../models/fontSavingModes";
import { FontStyles } from "../models/fontStyles";
import { FreeTextIntent } from "../models/freeTextIntent";
import { HorizontalAlignment } from "../models/horizontalAlignment";
import { HtmlDocumentType } from "../models/htmlDocumentType";
import { HtmlMarkupGenerationModes } from "../models/htmlMarkupGenerationModes";
import { ImageSrcType } from "../models/imageSrcType";
import { ImageTemplate } from "../models/imageTemplate";
import { ImageTemplatesRequest } from "../models/imageTemplatesRequest";
import { Justification } from "../models/justification";
import { LettersPositioningMethods } from "../models/lettersPositioningMethods";
import { LineEnding } from "../models/lineEnding";
import { LineIntent } from "../models/lineIntent";
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
import { Point } from "../models/point";
import { PolyIntent } from "../models/polyIntent";
import { RasterImagesSavingModes } from "../models/rasterImagesSavingModes";
import { Rectangle } from "../models/rectangle";
import { Rotation } from "../models/rotation";
import { Segment } from "../models/segment";
import { ShapeType } from "../models/shapeType";
import { Signature } from "../models/signature";
import { SignatureType } from "../models/signatureType";
import { SoundEncoding } from "../models/soundEncoding";
import { SoundIcon } from "../models/soundIcon";
import { SplitResult } from "../models/splitResult";
import { Stamp } from "../models/stamp";
import { StampType } from "../models/stampType";
import { TextHorizontalAlignment } from "../models/textHorizontalAlignment";
import { TextIcon } from "../models/textIcon";
import { TextLine } from "../models/textLine";
import { TextRect } from "../models/textRect";
import { TextRects } from "../models/textRects";
import { TextReplace } from "../models/textReplace";
import { TextReplaceListRequest } from "../models/textReplaceListRequest";
import { TextState } from "../models/textState";
import { TextStyle } from "../models/textStyle";
import { VerticalAlignment } from "../models/verticalAlignment";
import { WordCount } from "../models/wordCount";
import { WrapMode } from "../models/wrapMode";
import { Annotation } from "../models/annotation";
import { AnnotationsInfo } from "../models/annotationsInfo";
import { AnnotationsInfoResponse } from "../models/annotationsInfoResponse";
import { Attachment } from "../models/attachment";
import { AttachmentResponse } from "../models/attachmentResponse";
import { Attachments } from "../models/attachments";
import { AttachmentsResponse } from "../models/attachmentsResponse";
import { CaretAnnotationResponse } from "../models/caretAnnotationResponse";
import { CaretAnnotations } from "../models/caretAnnotations";
import { CaretAnnotationsResponse } from "../models/caretAnnotationsResponse";
import { CircleAnnotationResponse } from "../models/circleAnnotationResponse";
import { CircleAnnotations } from "../models/circleAnnotations";
import { CircleAnnotationsResponse } from "../models/circleAnnotationsResponse";
import { DiscUsageResponse } from "../models/discUsageResponse";
import { Document } from "../models/document";
import { DocumentPageResponse } from "../models/documentPageResponse";
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
import { FileAttachmentAnnotationResponse } from "../models/fileAttachmentAnnotationResponse";
import { FileAttachmentAnnotations } from "../models/fileAttachmentAnnotations";
import { FileAttachmentAnnotationsResponse } from "../models/fileAttachmentAnnotationsResponse";
import { FileExistResponse } from "../models/fileExistResponse";
import { FileVersion } from "../models/fileVersion";
import { FileVersionsResponse } from "../models/fileVersionsResponse";
import { FilesResponse } from "../models/filesResponse";
import { FreeTextAnnotationResponse } from "../models/freeTextAnnotationResponse";
import { FreeTextAnnotations } from "../models/freeTextAnnotations";
import { FreeTextAnnotationsResponse } from "../models/freeTextAnnotationsResponse";
import { HighlightAnnotationResponse } from "../models/highlightAnnotationResponse";
import { HighlightAnnotations } from "../models/highlightAnnotations";
import { HighlightAnnotationsResponse } from "../models/highlightAnnotationsResponse";
import { Image } from "../models/image";
import { ImageResponse } from "../models/imageResponse";
import { Images } from "../models/images";
import { ImagesResponse } from "../models/imagesResponse";
import { InkAnnotationResponse } from "../models/inkAnnotationResponse";
import { InkAnnotations } from "../models/inkAnnotations";
import { InkAnnotationsResponse } from "../models/inkAnnotationsResponse";
import { LineAnnotationResponse } from "../models/lineAnnotationResponse";
import { LineAnnotations } from "../models/lineAnnotations";
import { LineAnnotationsResponse } from "../models/lineAnnotationsResponse";
import { LinkAnnotation } from "../models/linkAnnotation";
import { LinkAnnotationResponse } from "../models/linkAnnotationResponse";
import { LinkAnnotations } from "../models/linkAnnotations";
import { LinkAnnotationsResponse } from "../models/linkAnnotationsResponse";
import { MovieAnnotationResponse } from "../models/movieAnnotationResponse";
import { MovieAnnotations } from "../models/movieAnnotations";
import { MovieAnnotationsResponse } from "../models/movieAnnotationsResponse";
import { Page } from "../models/page";
import { Pages } from "../models/pages";
import { PolyLineAnnotationResponse } from "../models/polyLineAnnotationResponse";
import { PolyLineAnnotations } from "../models/polyLineAnnotations";
import { PolyLineAnnotationsResponse } from "../models/polyLineAnnotationsResponse";
import { PolygonAnnotationResponse } from "../models/polygonAnnotationResponse";
import { PolygonAnnotations } from "../models/polygonAnnotations";
import { PolygonAnnotationsResponse } from "../models/polygonAnnotationsResponse";
import { PopupAnnotationResponse } from "../models/popupAnnotationResponse";
import { PopupAnnotations } from "../models/popupAnnotations";
import { PopupAnnotationsResponse } from "../models/popupAnnotationsResponse";
import { RedactionAnnotationResponse } from "../models/redactionAnnotationResponse";
import { RedactionAnnotations } from "../models/redactionAnnotations";
import { RedactionAnnotationsResponse } from "../models/redactionAnnotationsResponse";
import { SignatureVerifyResponse } from "../models/signatureVerifyResponse";
import { SoundAnnotationResponse } from "../models/soundAnnotationResponse";
import { SoundAnnotations } from "../models/soundAnnotations";
import { SoundAnnotationsResponse } from "../models/soundAnnotationsResponse";
import { SplitResultDocument } from "../models/splitResultDocument";
import { SplitResultResponse } from "../models/splitResultResponse";
import { SquareAnnotationResponse } from "../models/squareAnnotationResponse";
import { SquareAnnotations } from "../models/squareAnnotations";
import { SquareAnnotationsResponse } from "../models/squareAnnotationsResponse";
import { SquigglyAnnotationResponse } from "../models/squigglyAnnotationResponse";
import { SquigglyAnnotations } from "../models/squigglyAnnotations";
import { SquigglyAnnotationsResponse } from "../models/squigglyAnnotationsResponse";
import { StorageExistResponse } from "../models/storageExistResponse";
import { StrikeOutAnnotationResponse } from "../models/strikeOutAnnotationResponse";
import { StrikeOutAnnotations } from "../models/strikeOutAnnotations";
import { StrikeOutAnnotationsResponse } from "../models/strikeOutAnnotationsResponse";
import { TextAnnotationResponse } from "../models/textAnnotationResponse";
import { TextAnnotations } from "../models/textAnnotations";
import { TextAnnotationsResponse } from "../models/textAnnotationsResponse";
import { TextRectsResponse } from "../models/textRectsResponse";
import { TextReplaceResponse } from "../models/textReplaceResponse";
import { UnderlineAnnotationResponse } from "../models/underlineAnnotationResponse";
import { UnderlineAnnotations } from "../models/underlineAnnotations";
import { UnderlineAnnotationsResponse } from "../models/underlineAnnotationsResponse";
import { WordCountResponse } from "../models/wordCountResponse";
import { AnnotationInfo } from "../models/annotationInfo";
import { MarkupAnnotation } from "../models/markupAnnotation";
import { MovieAnnotation } from "../models/movieAnnotation";
import { PopupAnnotation } from "../models/popupAnnotation";
import { RedactionAnnotation } from "../models/redactionAnnotation";
import { CaretAnnotation } from "../models/caretAnnotation";
import { CommonFigureAnnotation } from "../models/commonFigureAnnotation";
import { FileAttachmentAnnotation } from "../models/fileAttachmentAnnotation";
import { FreeTextAnnotation } from "../models/freeTextAnnotation";
import { HighlightAnnotation } from "../models/highlightAnnotation";
import { InkAnnotation } from "../models/inkAnnotation";
import { LineAnnotation } from "../models/lineAnnotation";
import { PolyAnnotation } from "../models/polyAnnotation";
import { PopupAnnotationWithParent } from "../models/popupAnnotationWithParent";
import { SoundAnnotation } from "../models/soundAnnotation";
import { SquigglyAnnotation } from "../models/squigglyAnnotation";
import { StrikeOutAnnotation } from "../models/strikeOutAnnotation";
import { TextAnnotation } from "../models/textAnnotation";
import { UnderlineAnnotation } from "../models/underlineAnnotation";
import { CircleAnnotation } from "../models/circleAnnotation";
import { PolyLineAnnotation } from "../models/polyLineAnnotation";
import { PolygonAnnotation } from "../models/polygonAnnotation";
import { SquareAnnotation } from "../models/squareAnnotation";

import { ObjectSerializer } from "../objectSerializer";
import { Configuration } from "../configuration";

import localVarRequest = require('request');
import http = require('http');
import { invokeApiMethod } from "../requestHelper";

let defaultBasePath = 'https://api.aspose.cloud/v2.0';




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
     * @summary Delete document annotation by ID
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling deleteAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete all annotations from the document
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteDocumentAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteDocumentAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete all link annotations from the document
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteDocumentLinkAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/links'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteDocumentLinkAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete document field by name.
     * @param name The document name.
     * @param fieldName The field name/
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteField (name: string, fieldName: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Remove a specific file 
     * @param path Path of the file including file name and extension e.g. /Folder1/file.ext
     * @param versionId File&#39;s version
     * @param storage User&#39;s storage name
     */
    public async deleteFile (path: string, versionId?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/storage/file';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling deleteFile.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Remove a specific folder 
     * @param path Folder path e.g. /Folder1
     * @param storage User&#39;s storage name
     * @param recursive Remove recursivelly inner folder/files. If false and folder contains data than exception is raised.
     */
    public async deleteFolder (path: string, storage?: string, recursive?: boolean) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/storage/folder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling deleteFolder.');
        }

        if (path !== undefined && null !== path) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (recursive !== undefined && null !== recursive) {
            localVarQueryParameters['recursive'] = ObjectSerializer.serialize(recursive, "boolean");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete image from document page.
     * @param name The document name.
     * @param imageId Image ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteImage (name: string, imageId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteImage.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling deleteImage.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete document page link annotation by ID
     * @param name The document name.
     * @param linkId The link ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deleteLinkAnnotation (name: string, linkId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/links/{linkId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteLinkAnnotation.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling deleteLinkAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async deletePage (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete all annotations from the page
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deletePageAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deletePageAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling deletePageAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete all link annotations from the page
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async deletePageLinkAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/links'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deletePageLinkAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling deletePageLinkAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Delete custom document properties.
     * @param name 
     * @param storage 
     * @param folder 
     */
    public async deleteProperties (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async deleteProperty (name: string, propertyName: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page caret annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getCaretAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CaretAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/caret/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getCaretAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getCaretAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CaretAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page circle annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getCircleAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CircleAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/circle/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getCircleAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getCircleAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CircleAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Check the disk usage of the current account 
     * @param storage User&#39;s storage name
     */
    public async getDiscUsage (storage?: string) : Promise<{ response: http.IncomingMessage; body: DiscUsageResponse;  }> {
        const localVarPath = this.basePath + '/storage/disc';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

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
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsageResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read common document info.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocument (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocument.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AnnotationsInfoResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AnnotationsInfoResponse");
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
    public async getDocumentAttachmentByIndex (name: string, attachmentIndex: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AttachmentResponse;  }> {
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
    public async getDocumentAttachments (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AttachmentsResponse;  }> {
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
    public async getDocumentBookmarks (name: string, bookmarkPath?: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document caret annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentCaretAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CaretAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/caret'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentCaretAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CaretAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document circle annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentCircleAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CircleAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/circle'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentCircleAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CircleAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document FileAttachment annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentFileAttachmentAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FileAttachmentAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/fileattachment'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentFileAttachmentAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FileAttachmentAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document free text annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentFreeTextAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FreeTextAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/freetext'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentFreeTextAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FreeTextAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document highlight annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentHighlightAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: HighlightAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/highlight'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentHighlightAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HighlightAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document ink annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentInkAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: InkAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/ink'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentInkAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "InkAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document line annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentLineAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LineAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/line'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentLineAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "LineAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document movie annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentMovieAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: MovieAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/movie'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentMovieAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "MovieAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document polyline annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentPolyLineAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolyLineAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/polyline'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentPolyLineAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PolyLineAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document polygon annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentPolygonAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolygonAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/polygon'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentPolygonAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PolygonAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document popup annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentPopupAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PopupAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/popup'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentPopupAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PopupAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document popup annotations by parent id.
     * @param name The document name.
     * @param annotationId The parent annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentPopupAnnotationsByParent (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PopupAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/{annotationId}/popup'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentPopupAnnotationsByParent.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getDocumentPopupAnnotationsByParent.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PopupAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document properties.
     * @param name 
     * @param storage 
     * @param folder 
     */
    public async getDocumentProperties (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentPropertiesResponse;  }> {
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
    public async getDocumentProperty (name: string, propertyName: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentPropertyResponse;  }> {
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
     * @summary Read document redaction annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentRedactionAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: RedactionAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/redaction'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentRedactionAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "RedactionAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document sound annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentSoundAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SoundAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/sound'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentSoundAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SoundAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document square annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentSquareAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquareAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/square'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentSquareAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SquareAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document squiggly annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentSquigglyAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquigglyAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/squiggly'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentSquigglyAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SquigglyAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document StrikeOut annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentStrikeOutAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: StrikeOutAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/strikeout'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentStrikeOutAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StrikeOutAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document text annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentTextAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: TextAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentTextAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TextAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document underline annotations.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getDocumentUnderlineAnnotations (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: UnderlineAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/underline'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDocumentUnderlineAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "UnderlineAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Download a specific file 
     * @param path Path of the file including the file name and extension e.g. /file.ext
     * @param versionId File&#39;s version
     * @param storage User&#39;s storage name
     */
    public async getDownload (path: string, versionId?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
    public async getDownloadDocumentAttachmentByIndex (name: string, attachmentIndex: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @param storage The document storage.
     */
    public async getEpubInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Get document field by name.
     * @param name The document name.
     * @param fieldName The field name/
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getField (name: string, fieldName: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FieldResponse;  }> {
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
    public async getFields (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FieldsResponse;  }> {
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
     * @summary Read document page FileAttachment annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getFileAttachmentAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FileAttachmentAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/fileattachment/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFileAttachmentAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getFileAttachmentAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FileAttachmentAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page FileAttachment annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getFileAttachmentAnnotationData (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/fileattachment/{annotationId}/data'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFileAttachmentAnnotationData.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getFileAttachmentAnnotationData.');
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
     * @summary Read document page free text annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getFreeTextAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FreeTextAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/freetext/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getFreeTextAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getFreeTextAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FreeTextAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page highlight annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getHighlightAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: HighlightAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/highlight/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getHighlightAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getHighlightAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HighlightAnnotationResponse");
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
     * @param storage The document storage.
     */
    public async getHtmlInStorageToPdf (srcPath: string, htmlFileName?: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/create/html';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'srcPath' is not null or undefined
        if (srcPath === null || srcPath === undefined) {
            throw new Error('Required parameter srcPath was null or undefined when calling getHtmlInStorageToPdf.');
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
     * @summary Read document image by ID.
     * @param name The document name.
     * @param imageId Image ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImage (name: string, imageId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: ImageResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImage.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling getImage.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ImageResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document image in GIF format
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImageExtractAsGif (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/gif'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImageExtractAsGif.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling getImageExtractAsGif.');
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
     * @summary Extract document image in JPEG format
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImageExtractAsJpeg (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/jpeg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImageExtractAsJpeg.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling getImageExtractAsJpeg.');
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
     * @summary Extract document image in PNG format
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImageExtractAsPng (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/png'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImageExtractAsPng.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling getImageExtractAsPng.');
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
     * @summary Extract document image in TIFF format
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getImageExtractAsTiff (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getImageExtractAsTiff.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling getImageExtractAsTiff.');
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
    public async getImages (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: ImagesResponse;  }> {
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
     * @summary Read document page ink annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getInkAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: InkAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/ink/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getInkAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getInkAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "InkAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Check if a specific file or folder exists
     * @param path File or folder path e.g. /file.ext or /Folder1
     * @param versionId File&#39;s version
     * @param storage User&#39;s storage name
     */
    public async getIsExist (path: string, versionId?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: FileExistResponse;  }> {
        const localVarPath = this.basePath + '/storage/exist';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling getIsExist.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FileExistResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Check if storage exists 
     * @param name Storage name
     */
    public async getIsStorageExist (name: string) : Promise<{ response: http.IncomingMessage; body: StorageExistResponse;  }> {
        const localVarPath = this.basePath + '/storage/{name}/exist'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getIsStorageExist.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StorageExistResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert LaTeX file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.tex)
     * @param storage The document storage.
     */
    public async getLaTeXInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document page line annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getLineAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LineAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/line/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getLineAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getLineAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "LineAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document link annotation by ID.
     * @param name The document name.
     * @param linkId The link ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getLinkAnnotation (name: string, linkId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LinkAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/links/{linkId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getLinkAnnotation.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getLinkAnnotation.');
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
     * @summary Get the file's versions list 
     * @param path File path e.g. /file.ext or /Folder1/file.ext
     * @param storage User&#39;s storage name
     */
    public async getListFileVersions (path: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: FileVersionsResponse;  }> {
        const localVarPath = this.basePath + '/storage/version';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling getListFileVersions.');
        }

        if (path !== undefined && null !== path) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "FileVersionsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Get the file listing of a specific folder 
     * @param path Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39;
     * @param storage User&#39;s storage name
     */
    public async getListFiles (path?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: FilesResponse;  }> {
        const localVarPath = this.basePath + '/storage/folder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (path !== undefined && null !== path) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "FilesResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert MHT file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.mht)
     * @param storage The document storage.
     */
    public async getMhtInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document page movie annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getMovieAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: MovieAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/movie/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getMovieAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getMovieAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "MovieAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page info.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPage (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentPageResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPageResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read documant page annotations. Returns only FreeTextAnnotations, TextAnnotations, other annotations will implemented next releases.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AnnotationsInfoResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AnnotationsInfoResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page caret annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageCaretAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CaretAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/caret'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageCaretAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageCaretAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CaretAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page circle annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageCircleAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CircleAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/circle'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageCircleAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageCircleAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CircleAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Bmp image and return resulting file in response.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageConvertToBmp (name: string, pageNumber: number, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert document page to Emf image and return resulting file in response.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageConvertToEmf (name: string, pageNumber: number, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert document page to Gif image and return resulting file in response.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageConvertToGif (name: string, pageNumber: number, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert document page to Jpeg image and return resulting file in response.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageConvertToJpeg (name: string, pageNumber: number, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert document page to Png image and return resulting file in response.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageConvertToPng (name: string, pageNumber: number, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert document page to Tiff image  and return resulting file in response.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageConvertToTiff (name: string, pageNumber: number, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document page FileAttachment annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageFileAttachmentAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FileAttachmentAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/fileattachment'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageFileAttachmentAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageFileAttachmentAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FileAttachmentAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page free text annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageFreeTextAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FreeTextAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/freetext'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageFreeTextAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageFreeTextAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FreeTextAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page highlight annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageHighlightAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: HighlightAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/highlight'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageHighlightAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageHighlightAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HighlightAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page ink annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageInkAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: InkAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/ink'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageInkAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageInkAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "InkAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page line annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageLineAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LineAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/line'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageLineAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageLineAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "LineAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page link annotation by ID.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param linkId The link ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageLinkAnnotation (name: string, pageNumber: number, linkId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LinkAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/links/{linkId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageLinkAnnotation.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageLinkAnnotation.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getPageLinkAnnotation.');
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
    public async getPageLinkAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LinkAnnotationsResponse;  }> {
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
     * @summary Read document page movie annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageMovieAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: MovieAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/movie'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageMovieAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageMovieAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "MovieAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page polyline annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPagePolyLineAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolyLineAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/polyline'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPagePolyLineAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPagePolyLineAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PolyLineAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page polygon annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPagePolygonAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolygonAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/polygon'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPagePolygonAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPagePolygonAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PolygonAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page popup annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPagePopupAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PopupAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/popup'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPagePopupAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPagePopupAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PopupAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page redaction annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageRedactionAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: RedactionAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/redaction'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageRedactionAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageRedactionAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "RedactionAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page sound annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageSoundAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SoundAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/sound'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageSoundAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageSoundAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SoundAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page square annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageSquareAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquareAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/square'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageSquareAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageSquareAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SquareAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page squiggly annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageSquigglyAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquigglyAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/squiggly'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageSquigglyAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageSquigglyAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SquigglyAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page StrikeOut annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageStrikeOutAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: StrikeOutAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/strikeout'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageStrikeOutAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageStrikeOutAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StrikeOutAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read page text items.
     * @param name The document name.
     * @param pageNumber Number of page (starting from 1).
     * @param LLX X-coordinate of lower - left corner.
     * @param LLY Y - coordinate of lower-left corner.
     * @param URX X - coordinate of upper-right corner.
     * @param URY Y - coordinate of upper-right corner.
     * @param format List of formats for search.
     * @param regex Formats are specified as a regular expression.
     * @param splitRects Split result fragments (default is true).
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPageText (name: string, pageNumber: number, LLX: number, LLY: number, URX: number, URY: number, format?: Array<string>, regex?: string, splitRects?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: TextRectsResponse;  }> {
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

        // verify required parameter 'LLX' is not null or undefined
        if (LLX === null || LLX === undefined) {
            throw new Error('Required parameter LLX was null or undefined when calling getPageText.');
        }

        // verify required parameter 'LLY' is not null or undefined
        if (LLY === null || LLY === undefined) {
            throw new Error('Required parameter LLY was null or undefined when calling getPageText.');
        }

        // verify required parameter 'URX' is not null or undefined
        if (URX === null || URX === undefined) {
            throw new Error('Required parameter URX was null or undefined when calling getPageText.');
        }

        // verify required parameter 'URY' is not null or undefined
        if (URY === null || URY === undefined) {
            throw new Error('Required parameter URY was null or undefined when calling getPageText.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "Array<string>");
        }

        if (regex !== undefined && null !== regex) {
            localVarQueryParameters['regex'] = ObjectSerializer.serialize(regex, "string");
        }

        if (splitRects !== undefined && null !== splitRects) {
            localVarQueryParameters['splitRects'] = ObjectSerializer.serialize(splitRects, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (LLX !== undefined && null !== LLX) {
            localVarQueryParameters['LLX'] = ObjectSerializer.serialize(LLX, "number");
        }

        if (LLY !== undefined && null !== LLY) {
            localVarQueryParameters['LLY'] = ObjectSerializer.serialize(LLY, "number");
        }

        if (URX !== undefined && null !== URX) {
            localVarQueryParameters['URX'] = ObjectSerializer.serialize(URX, "number");
        }

        if (URY !== undefined && null !== URY) {
            localVarQueryParameters['URY'] = ObjectSerializer.serialize(URY, "number");
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
     * @summary Read document page text annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageTextAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: TextAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageTextAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageTextAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TextAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page underline annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPageUnderlineAnnotations (name: string, pageNumber: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: UnderlineAnnotationsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/underline'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPageUnderlineAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getPageUnderlineAnnotations.');
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
        const result =  ObjectSerializer.deserialize(response.body, "UnderlineAnnotationsResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document pages info.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPages (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentPagesResponse;  }> {
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
     * @param storage The document storage.
     */
    public async getPclInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @param storage The document storage.
     */
    public async getPdfInStorageToDoc (name: string, addReturnToLineEnd?: boolean, format?: string, imageResolutionX?: number, imageResolutionY?: number, maxDistanceBetweenTextLines?: number, mode?: string, recognizeBullets?: boolean, relativeHorizontalProximity?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to EPUB format and returns resulting file in response content
     * @param name The document name.
     * @param contentRecognitionMode Property tunes conversion for this or that desirable method of recognition of content.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToEpub (name: string, contentRecognitionMode?: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @param storage The document storage.
     */
    public async getPdfInStorageToHtml (name: string, additionalMarginWidthInPoints?: number, compressSvgGraphicsIfAny?: boolean, convertMarkedContentToLayers?: boolean, defaultFontName?: string, documentType?: string, fixedLayout?: boolean, imageResolution?: number, minimalLineWidth?: number, preventGlyphsGrouping?: boolean, splitCssIntoPages?: boolean, splitIntoPages?: boolean, useZOrder?: boolean, antialiasingProcessing?: string, cssClassNamesPrefix?: string, explicitListOfSavedPages?: Array<number>, fontEncodingStrategy?: string, fontSavingMode?: string, htmlMarkupGenerationMode?: string, lettersPositioningMethod?: string, pagesFlowTypeDependsOnViewersScreenSize?: boolean, partsEmbeddingMode?: string, rasterImagesSavingMode?: string, removeEmptyAreasOnTopAndBottom?: boolean, saveShadowedTextsAsTransparentTexts?: boolean, saveTransparentTexts?: boolean, specialFolderForAllImages?: string, specialFolderForSvgImages?: string, trySaveTextUnderliningAndStrikeoutingInCss?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to LaTeX format and returns resulting file in response content
     * @param name The document name.
     * @param pagesCount Pages count.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToLaTeX (name: string, pagesCount?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to MOBIXML format and returns resulting file in response content
     * @param name The document name.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToMobiXml (name: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to PdfA format and returns resulting file in response content
     * @param name The document name.
     * @param type Type of PdfA format.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToPdfA (name: string, type: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to PPTX format and returns resulting file in response content
     * @param name The document name.
     * @param separateImages Separate images.
     * @param slidesAsImages Slides as images.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToPptx (name: string, separateImages?: boolean, slidesAsImages?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to SVG format and returns resulting file in response content
     * @param name The document name.
     * @param compressOutputToZipArchive Specifies whether output will be created as one zip-archive.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToSvg (name: string, compressOutputToZipArchive?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @param storage The document storage.
     */
    public async getPdfInStorageToTiff (name: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to XLS format and returns resulting file in response content
     * @param name The document name.
     * @param insertBlankColumnAtFirst Insert blank column at first
     * @param minimizeTheNumberOfWorksheets Minimize the number of worksheets
     * @param scaleFactor Scale factor
     * @param uniformWorksheets Uniform worksheets
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToXls (name: string, insertBlankColumnAtFirst?: boolean, minimizeTheNumberOfWorksheets?: boolean, scaleFactor?: number, uniformWorksheets?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to XML format and returns resulting file in response content
     * @param name The document name.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToXml (name: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Converts PDF document (located on storage) to XPS format and returns resulting file in response content
     * @param name The document name.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getPdfInStorageToXps (name: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document page polyline annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPolyLineAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolyLineAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/polyline/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPolyLineAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getPolyLineAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PolyLineAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page polygon annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPolygonAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolygonAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/polygon/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPolygonAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getPolygonAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PolygonAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page popup annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getPopupAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PopupAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/popup/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPopupAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getPopupAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "PopupAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PS file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.ps)
     * @param storage The document storage.
     */
    public async getPsInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document page redaction annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getRedactionAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: RedactionAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/redaction/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getRedactionAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getRedactionAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "RedactionAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page sound annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getSoundAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SoundAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/sound/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSoundAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getSoundAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SoundAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page sound annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getSoundAnnotationData (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/sound/{annotationId}/data'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSoundAnnotationData.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getSoundAnnotationData.');
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
     * @summary Read document page square annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getSquareAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquareAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/square/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSquareAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getSquareAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SquareAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page squiggly annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getSquigglyAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquigglyAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/squiggly/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSquigglyAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getSquigglyAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SquigglyAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page StrikeOut annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getStrikeOutAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: StrikeOutAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/strikeout/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getStrikeOutAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getStrikeOutAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StrikeOutAnnotationResponse");
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
     * @param storage The document storage.
     */
    public async getSvgInStorageToPdf (srcPath: string, adjustPageSize?: boolean, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Read document text.
     * @param name The document name.
     * @param LLX X-coordinate of lower - left corner.
     * @param LLY Y - coordinate of lower-left corner.
     * @param URX X - coordinate of upper-right corner.
     * @param URY Y - coordinate of upper-right corner.
     * @param format List of formats for search.
     * @param regex Formats are specified as a regular expression.
     * @param splitRects Split result fragments (default is true).
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async getText (name: string, LLX: number, LLY: number, URX: number, URY: number, format?: Array<string>, regex?: string, splitRects?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: TextRectsResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getText.');
        }

        // verify required parameter 'LLX' is not null or undefined
        if (LLX === null || LLX === undefined) {
            throw new Error('Required parameter LLX was null or undefined when calling getText.');
        }

        // verify required parameter 'LLY' is not null or undefined
        if (LLY === null || LLY === undefined) {
            throw new Error('Required parameter LLY was null or undefined when calling getText.');
        }

        // verify required parameter 'URX' is not null or undefined
        if (URX === null || URX === undefined) {
            throw new Error('Required parameter URX was null or undefined when calling getText.');
        }

        // verify required parameter 'URY' is not null or undefined
        if (URY === null || URY === undefined) {
            throw new Error('Required parameter URY was null or undefined when calling getText.');
        }

        if (format !== undefined && null !== format) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "Array<string>");
        }

        if (regex !== undefined && null !== regex) {
            localVarQueryParameters['regex'] = ObjectSerializer.serialize(regex, "string");
        }

        if (splitRects !== undefined && null !== splitRects) {
            localVarQueryParameters['splitRects'] = ObjectSerializer.serialize(splitRects, "boolean");
        }

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (LLX !== undefined && null !== LLX) {
            localVarQueryParameters['LLX'] = ObjectSerializer.serialize(LLX, "number");
        }

        if (LLY !== undefined && null !== LLY) {
            localVarQueryParameters['LLY'] = ObjectSerializer.serialize(LLY, "number");
        }

        if (URX !== undefined && null !== URX) {
            localVarQueryParameters['URX'] = ObjectSerializer.serialize(URX, "number");
        }

        if (URY !== undefined && null !== URY) {
            localVarQueryParameters['URY'] = ObjectSerializer.serialize(URY, "number");
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
     * @summary Read document page text annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getTextAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: TextAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/text/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getTextAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getTextAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TextAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Read document page underline annotation by ID.
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getUnderlineAnnotation (name: string, annotationId: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: UnderlineAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/underline/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getUnderlineAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling getUnderlineAnnotation.');
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
        const result =  ObjectSerializer.deserialize(response.body, "UnderlineAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Verify signature document.
     * @param name The document name.
     * @param signName Sign name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getVerifySignature (name: string, signName: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SignatureVerifyResponse;  }> {
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
     * @param storage The document storage.
     */
    public async getWebInStorageToPdf (url: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Get number of words per document page.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async getWordsPerPage (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: WordCountResponse;  }> {
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
     * @param storage The document storage.
     */
    public async getXfaPdfInStorageToAcroForm (name: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert XML file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xml)
     * @param xslFilePath Full XSL source filename (ex. /folder1/folder2/template.xsl)
     * @param storage The document storage.
     */
    public async getXmlInStorageToPdf (srcPath: string, xslFilePath?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert XPS file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xps)
     * @param storage The document storage.
     */
    public async getXpsInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Convert XslFo file (located on storage) to PDF format and return resulting file in response. 
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xslfo)
     * @param storage The document storage.
     */
    public async getXslFoInStorageToPdf (srcPath: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
     * @summary Append document to existing one.
     * @param name The original document name.
     * @param appendDocument with the append document data.
     * @param appendFile Append file server path.
     * @param startPage Appending start page.
     * @param endPage Appending end page.
     * @param storage The documents storage.
     * @param folder The original document folder.
     */
    public async postAppendDocument (name: string, appendDocument?: AppendDocument, appendFile?: string, startPage?: number, endPage?: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentResponse;  }> {
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
    public async postCreateField (name: string, page: number, field?: Field, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postDocumentTextReplace (name: string, textReplace: TextReplaceListRequest, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: TextReplaceResponse;  }> {
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
     * @summary Flatten the document.
     * @param name The document name.
     * @param updateAppearances If set, all field appearances will be regenerated before flattening. This option may help if field is incorrectly flattened. This option may decrease performance..
     * @param callEvents If set, formatting and other JavaScript events will be called.
     * @param hideButtons If set, buttons will be removed from flattened document.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postFlattenDocument (name: string, updateAppearances?: boolean, callEvents?: boolean, hideButtons?: boolean, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/flatten'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postFlattenDocument.');
        }

        if (updateAppearances !== undefined && null !== updateAppearances) {
            localVarQueryParameters['updateAppearances'] = ObjectSerializer.serialize(updateAppearances, "boolean");
        }

        if (callEvents !== undefined && null !== callEvents) {
            localVarQueryParameters['callEvents'] = ObjectSerializer.serialize(callEvents, "boolean");
        }

        if (hideButtons !== undefined && null !== hideButtons) {
            localVarQueryParameters['hideButtons'] = ObjectSerializer.serialize(hideButtons, "boolean");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Insert image to document page.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param llx Coordinate lower left X.
     * @param lly Coordinate lower left Y.
     * @param urx Coordinate upper right X.
     * @param ury Coordinate upper right Y.
     * @param imageFilePath Path to image file if specified. Request content is used otherwise.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param image Image file.
     */
    public async postInsertImage (name: string, pageNumber: number, llx: number, lly: number, urx: number, ury: number, imageFilePath?: string, storage?: string, folder?: string, image?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/images'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postInsertImage.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postInsertImage.');
        }

        // verify required parameter 'llx' is not null or undefined
        if (llx === null || llx === undefined) {
            throw new Error('Required parameter llx was null or undefined when calling postInsertImage.');
        }

        // verify required parameter 'lly' is not null or undefined
        if (lly === null || lly === undefined) {
            throw new Error('Required parameter lly was null or undefined when calling postInsertImage.');
        }

        // verify required parameter 'urx' is not null or undefined
        if (urx === null || urx === undefined) {
            throw new Error('Required parameter urx was null or undefined when calling postInsertImage.');
        }

        // verify required parameter 'ury' is not null or undefined
        if (ury === null || ury === undefined) {
            throw new Error('Required parameter ury was null or undefined when calling postInsertImage.');
        }

        if (llx !== undefined && null !== llx) {
            localVarQueryParameters['llx'] = ObjectSerializer.serialize(llx, "number");
        }

        if (lly !== undefined && null !== lly) {
            localVarQueryParameters['lly'] = ObjectSerializer.serialize(lly, "number");
        }

        if (urx !== undefined && null !== urx) {
            localVarQueryParameters['urx'] = ObjectSerializer.serialize(urx, "number");
        }

        if (ury !== undefined && null !== ury) {
            localVarQueryParameters['ury'] = ObjectSerializer.serialize(ury, "number");
        }

        if (imageFilePath !== undefined && null !== imageFilePath) {
            localVarQueryParameters['imageFilePath'] = ObjectSerializer.serialize(imageFilePath, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Move a specific file
     * @param src Source file path e.g. /fileSource.ext
     * @param dest Destination file path e.g. /fileDestination.ext
     * @param versionId Source file&#39;s version,
     * @param storage User&#39;s source storage name
     * @param destStorage User&#39;s destination storage name
     */
    public async postMoveFile (src: string, dest: string, versionId?: string, storage?: string, destStorage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/storage/file';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'src' is not null or undefined
        if (src === null || src === undefined) {
            throw new Error('Required parameter src was null or undefined when calling postMoveFile.');
        }

        // verify required parameter 'dest' is not null or undefined
        if (dest === null || dest === undefined) {
            throw new Error('Required parameter dest was null or undefined when calling postMoveFile.');
        }

        if (src !== undefined && null !== src) {
            localVarQueryParameters['src'] = ObjectSerializer.serialize(src, "string");
        }

        if (dest !== undefined && null !== dest) {
            localVarQueryParameters['dest'] = ObjectSerializer.serialize(dest, "string");
        }

        if (versionId !== undefined && null !== versionId) {
            localVarQueryParameters['versionId'] = ObjectSerializer.serialize(versionId, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (destStorage !== undefined && null !== destStorage) {
            localVarQueryParameters['destStorage'] = ObjectSerializer.serialize(destStorage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Move a specific folder 
     * @param src Source folder path e.g. /Folder1
     * @param dest Destination folder path e.g. /Folder2
     * @param storage User&#39;s source storage name
     * @param destStorage User&#39;s destination storage name
     */
    public async postMoveFolder (src: string, dest: string, storage?: string, destStorage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/storage/folder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'src' is not null or undefined
        if (src === null || src === undefined) {
            throw new Error('Required parameter src was null or undefined when calling postMoveFolder.');
        }

        // verify required parameter 'dest' is not null or undefined
        if (dest === null || dest === undefined) {
            throw new Error('Required parameter dest was null or undefined when calling postMoveFolder.');
        }

        if (src !== undefined && null !== src) {
            localVarQueryParameters['src'] = ObjectSerializer.serialize(src, "string");
        }

        if (dest !== undefined && null !== dest) {
            localVarQueryParameters['dest'] = ObjectSerializer.serialize(dest, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (destStorage !== undefined && null !== destStorage) {
            localVarQueryParameters['destStorage'] = ObjectSerializer.serialize(destStorage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postMovePage (name: string, pageNumber: number, newIndex: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postOptimizeDocument (name: string, options?: OptimizeOptions, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page caret annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageCaretAnnotations (name: string, pageNumber: number, annotations: Array<CaretAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/caret'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageCaretAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageCaretAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageCaretAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<CaretAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page circle annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageCircleAnnotations (name: string, pageNumber: number, annotations: Array<CircleAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/circle'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageCircleAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageCircleAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageCircleAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<CircleAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page FileAttachment annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageFileAttachmentAnnotations (name: string, pageNumber: number, annotations: Array<FileAttachmentAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/fileattachment'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageFileAttachmentAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageFileAttachmentAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageFileAttachmentAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<FileAttachmentAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page free text annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageFreeTextAnnotations (name: string, pageNumber: number, annotations: Array<FreeTextAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/freetext'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageFreeTextAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageFreeTextAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageFreeTextAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<FreeTextAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page highlight annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageHighlightAnnotations (name: string, pageNumber: number, annotations: Array<HighlightAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/highlight'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageHighlightAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageHighlightAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageHighlightAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<HighlightAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page ink annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageInkAnnotations (name: string, pageNumber: number, annotations: Array<InkAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/ink'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageInkAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageInkAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageInkAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<InkAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page line annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageLineAnnotations (name: string, pageNumber: number, annotations: Array<LineAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/line'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageLineAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageLineAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageLineAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<LineAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page link annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param links Array of link anotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageLinkAnnotations (name: string, pageNumber: number, links: Array<LinkAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/links'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageLinkAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageLinkAnnotations.');
        }

        // verify required parameter 'links' is not null or undefined
        if (links === null || links === undefined) {
            throw new Error('Required parameter links was null or undefined when calling postPageLinkAnnotations.');
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
            body: ObjectSerializer.serialize(links, "Array<LinkAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page movie annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageMovieAnnotations (name: string, pageNumber: number, annotations: Array<MovieAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/movie'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageMovieAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageMovieAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageMovieAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<MovieAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page polyline annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPagePolyLineAnnotations (name: string, pageNumber: number, annotations: Array<PolyLineAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/polyline'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPagePolyLineAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPagePolyLineAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPagePolyLineAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<PolyLineAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page polygon annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPagePolygonAnnotations (name: string, pageNumber: number, annotations: Array<PolygonAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/polygon'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPagePolygonAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPagePolygonAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPagePolygonAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<PolygonAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page redaction annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageRedactionAnnotations (name: string, pageNumber: number, annotations: Array<RedactionAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/redaction'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageRedactionAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageRedactionAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageRedactionAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<RedactionAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page sound annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageSoundAnnotations (name: string, pageNumber: number, annotations: Array<SoundAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/sound'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageSoundAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageSoundAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageSoundAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<SoundAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page square annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageSquareAnnotations (name: string, pageNumber: number, annotations: Array<SquareAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/square'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageSquareAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageSquareAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageSquareAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<SquareAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page squiggly annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageSquigglyAnnotations (name: string, pageNumber: number, annotations: Array<SquigglyAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/squiggly'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageSquigglyAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageSquigglyAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageSquigglyAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<SquigglyAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page StrikeOut annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageStrikeOutAnnotations (name: string, pageNumber: number, annotations: Array<StrikeOutAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/strikeout'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageStrikeOutAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageStrikeOutAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageStrikeOutAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<StrikeOutAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document page text annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageTextAnnotations (name: string, pageNumber: number, annotations: Array<TextAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/text'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageTextAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageTextAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageTextAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<TextAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postPageTextReplace (name: string, pageNumber: number, textReplaceListRequest: TextReplaceListRequest, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: TextReplaceResponse;  }> {
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
     * @summary Add document page underline annotations.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param annotations The array of annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPageUnderlineAnnotations (name: string, pageNumber: number, annotations: Array<UnderlineAnnotation>, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/pages/{pageNumber}/annotations/underline'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'pageNumber' + '}', encodeURIComponent(String(pageNumber)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPageUnderlineAnnotations.');
        }

        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling postPageUnderlineAnnotations.');
        }

        // verify required parameter 'annotations' is not null or undefined
        if (annotations === null || annotations === undefined) {
            throw new Error('Required parameter annotations was null or undefined when calling postPageUnderlineAnnotations.');
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
            body: ObjectSerializer.serialize(annotations, "Array<UnderlineAnnotation>")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add document popup annotations.
     * @param name The document name.
     * @param annotationId The parent annotation ID.
     * @param annotation The annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async postPopupAnnotation (name: string, annotationId: string, annotation: PopupAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/{annotationId}/popup'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling postPopupAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling postPopupAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling postPopupAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "PopupAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postSignDocument (name: string, signature?: Signature, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postSignPage (name: string, pageNumber: number, signature?: Signature, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
    public async postSplitDocument (name: string, format?: string, from?: number, to?: number, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SplitResultResponse;  }> {
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
    public async putAddNewPage (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentPagesResponse;  }> {
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
     * @summary Add text to PDF document page.
     * @param name The document name.
     * @param pageNumber Number of page (starting from 1).
     * @param paragraph Paragraph data.
     * @param folder Document folder.
     * @param storage The document storage.
     */
    public async putAddText (name: string, pageNumber: number, paragraph?: Paragraph, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document caret annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putCaretAnnotation (name: string, annotationId: string, annotation: CaretAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CaretAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/caret/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putCaretAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putCaretAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putCaretAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "CaretAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "CaretAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document circle annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putCircleAnnotation (name: string, annotationId: string, annotation: CircleAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: CircleAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/circle/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putCircleAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putCircleAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putCircleAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "CircleAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "CircleAnnotationResponse");
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
    public async putCreate (path: string, file: Buffer, versionId?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Create empty document.
     * @param name The new document name.
     * @param storage The document storage.
     * @param folder The new document folder.
     */
    public async putCreateDocument (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putCreateDocument.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Create the folder 
     * @param path Target folder&#39;s path e.g. Folder1/Folder2/. The folders will be created recursively
     * @param storage User&#39;s source storage name
     * @param destStorage User&#39;s destination storage name
     */
    public async putCreateFolder (path: string, storage?: string, destStorage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/storage/folder';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling putCreateFolder.');
        }

        if (path !== undefined && null !== path) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
        }

        if (destStorage !== undefined && null !== destStorage) {
            localVarQueryParameters['destStorage'] = ObjectSerializer.serialize(destStorage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert EPUB file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.epub)
     * @param storage The document storage.
     * @param dstFolder The destination document folder.
     */
    public async putEpubInStorageToPdf (name: string, srcPath: string, storage?: string, dstFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Flatten form fields in document.
     * @param name The document name.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putFieldsFlatten (name: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document FileAttachment annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putFileAttachmentAnnotation (name: string, annotationId: string, annotation: FileAttachmentAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FileAttachmentAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/fileattachment/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putFileAttachmentAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putFileAttachmentAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putFileAttachmentAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "FileAttachmentAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "FileAttachmentAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document FileAttachment annotation content to storage
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param outFolder The output folder.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putFileAttachmentAnnotationDataExtract (name: string, annotationId: string, outFolder?: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/fileattachment/{annotationId}/data/extract'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putFileAttachmentAnnotationDataExtract.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putFileAttachmentAnnotationDataExtract.');
        }

        if (outFolder !== undefined && null !== outFolder) {
            localVarQueryParameters['outFolder'] = ObjectSerializer.serialize(outFolder, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document free text annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putFreeTextAnnotation (name: string, annotationId: string, annotation: FreeTextAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FreeTextAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/freetext/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putFreeTextAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putFreeTextAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putFreeTextAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "FreeTextAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "FreeTextAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document highlight annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putHighlightAnnotation (name: string, annotationId: string, annotation: HighlightAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: HighlightAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/highlight/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putHighlightAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putHighlightAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putHighlightAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "HighlightAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "HighlightAnnotationResponse");
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
     * @param storage The document storage.
     */
    public async putHtmlInStorageToPdf (name: string, srcPath: string, htmlFileName?: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document image in GIF format to folder
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImageExtractAsGif (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/gif'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImageExtractAsGif.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling putImageExtractAsGif.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document image in JPEG format to folder
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImageExtractAsJpeg (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/jpeg'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImageExtractAsJpeg.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling putImageExtractAsJpeg.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document image in PNG format to folder
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImageExtractAsPng (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/png'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImageExtractAsPng.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling putImageExtractAsPng.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document image in TIFF format to folder
     * @param name The document name.
     * @param imageId Image ID.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImageExtractAsTiff (name: string, imageId: string, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}/extract/tiff'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putImageExtractAsTiff.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling putImageExtractAsTiff.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert image file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param imageTemplates Image templates
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putImageInStorageToPdf (name: string, imageTemplates: ImageTemplatesRequest, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in GIF format to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsGif (name: string, pageNumber: number, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in JPEG format to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage 
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsJpeg (name: string, pageNumber: number, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in PNG format to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsPng (name: string, pageNumber: number, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document images in TIFF format to folder.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param destFolder The document folder.
     */
    public async putImagesExtractAsTiff (name: string, pageNumber: number, width?: number, height?: number, storage?: string, folder?: string, destFolder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document ink annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putInkAnnotation (name: string, annotationId: string, annotation: InkAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: InkAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/ink/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putInkAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putInkAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putInkAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "InkAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "InkAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert LaTeX file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.tex)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putLaTeXInStorageToPdf (name: string, srcPath: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document line annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putLineAnnotation (name: string, annotationId: string, annotation: LineAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LineAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/line/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putLineAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putLineAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putLineAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "LineAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "LineAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document page link annotations
     * @param name The document name.
     * @param linkId The link ID.
     * @param link Link anotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putLinkAnnotation (name: string, linkId: string, link: LinkAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: LinkAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/links/{linkId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putLinkAnnotation.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling putLinkAnnotation.');
        }

        // verify required parameter 'link' is not null or undefined
        if (link === null || link === undefined) {
            throw new Error('Required parameter link was null or undefined when calling putLinkAnnotation.');
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
            body: ObjectSerializer.serialize(link, "LinkAnnotation")
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
     * @summary Merge a list of documents.
     * @param name Resulting documen name.
     * @param mergeDocuments with a list of documents.
     * @param storage Resulting document storage.
     * @param folder Resulting document folder.
     */
    public async putMergeDocuments (name: string, mergeDocuments?: MergeDocuments, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
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
            encoding: null,
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert MHT file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.mht)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putMhtInStorageToPdf (name: string, srcPath: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document movie annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putMovieAnnotation (name: string, annotationId: string, annotation: MovieAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: MovieAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/movie/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putMovieAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putMovieAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putMovieAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "MovieAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "MovieAnnotationResponse");
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
    public async putPageAddStamp (name: string, pageNumber: number, stamp: Stamp, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to bmp image and upload resulting file to storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPageConvertToBmp (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to emf image and upload resulting file to storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPageConvertToEmf (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to gif image and upload resulting file to storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPageConvertToGif (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Jpeg image and upload resulting file to storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPageConvertToJpeg (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to png image and upload resulting file to storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPageConvertToPng (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert document page to Tiff image and upload resulting file to storage.
     * @param name The document name.
     * @param pageNumber The page number.
     * @param outPath The out path of result image.
     * @param width The converted image width.
     * @param height The converted image height.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPageConvertToTiff (name: string, pageNumber: number, outPath: string, width?: number, height?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PCL file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.pcl)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putPclInStorageToPdf (name: string, srcPath: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToDoc (outPath: string, addReturnToLineEnd?: boolean, format?: string, imageResolutionX?: number, imageResolutionY?: number, maxDistanceBetweenTextLines?: number, mode?: string, recognizeBullets?: boolean, relativeHorizontalProximity?: number, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to EPUB format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.epub)
     * @param contentRecognitionMode Property tunes conversion for this or that desirable method of recognition of content.
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToEpub (outPath: string, contentRecognitionMode?: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToHtml (outPath: string, additionalMarginWidthInPoints?: number, compressSvgGraphicsIfAny?: boolean, convertMarkedContentToLayers?: boolean, defaultFontName?: string, documentType?: string, fixedLayout?: boolean, imageResolution?: number, minimalLineWidth?: number, preventGlyphsGrouping?: boolean, splitCssIntoPages?: boolean, splitIntoPages?: boolean, useZOrder?: boolean, antialiasingProcessing?: string, cssClassNamesPrefix?: string, explicitListOfSavedPages?: Array<number>, fontEncodingStrategy?: string, fontSavingMode?: string, htmlMarkupGenerationMode?: string, lettersPositioningMethod?: string, pagesFlowTypeDependsOnViewersScreenSize?: boolean, partsEmbeddingMode?: string, rasterImagesSavingMode?: string, removeEmptyAreasOnTopAndBottom?: boolean, saveShadowedTextsAsTransparentTexts?: boolean, saveTransparentTexts?: boolean, specialFolderForAllImages?: string, specialFolderForSvgImages?: string, trySaveTextUnderliningAndStrikeoutingInCss?: boolean, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to LaTeX format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.tex)
     * @param pagesCount Pages count.
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToLaTeX (outPath: string, pagesCount?: number, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to MOBIXML format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.mobixml)
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToMobiXml (outPath: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to PdfA format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param type Type of PdfA format.
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToPdfA (outPath: string, type: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to PPTX format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pptx)
     * @param separateImages Separate images.
     * @param slidesAsImages Slides as images.
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToPptx (outPath: string, separateImages?: boolean, slidesAsImages?: boolean, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to SVG format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.svg)
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToSvg (outPath: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToTiff (outPath: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToXls (outPath: string, insertBlankColumnAtFirst?: boolean, minimizeTheNumberOfWorksheets?: boolean, scaleFactor?: number, uniformWorksheets?: boolean, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to XML format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xml)
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToXml (outPath: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (in request content) to XPS format and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xps)
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putPdfInRequestToXps (outPath: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     */
    public async putPdfInStorageToDoc (name: string, outPath: string, addReturnToLineEnd?: boolean, format?: string, imageResolutionX?: number, imageResolutionY?: number, maxDistanceBetweenTextLines?: number, mode?: string, recognizeBullets?: boolean, relativeHorizontalProximity?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to EPUB format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.epub)
     * @param contentRecognitionMode Property tunes conversion for this or that desirable method of recognition of content.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToEpub (name: string, outPath: string, contentRecognitionMode?: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     */
    public async putPdfInStorageToHtml (name: string, outPath: string, additionalMarginWidthInPoints?: number, compressSvgGraphicsIfAny?: boolean, convertMarkedContentToLayers?: boolean, defaultFontName?: string, documentType?: string, fixedLayout?: boolean, imageResolution?: number, minimalLineWidth?: number, preventGlyphsGrouping?: boolean, splitCssIntoPages?: boolean, splitIntoPages?: boolean, useZOrder?: boolean, antialiasingProcessing?: string, cssClassNamesPrefix?: string, explicitListOfSavedPages?: Array<number>, fontEncodingStrategy?: string, fontSavingMode?: string, htmlMarkupGenerationMode?: string, lettersPositioningMethod?: string, pagesFlowTypeDependsOnViewersScreenSize?: boolean, partsEmbeddingMode?: string, rasterImagesSavingMode?: string, removeEmptyAreasOnTopAndBottom?: boolean, saveShadowedTextsAsTransparentTexts?: boolean, saveTransparentTexts?: boolean, specialFolderForAllImages?: string, specialFolderForSvgImages?: string, trySaveTextUnderliningAndStrikeoutingInCss?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to LaTeX format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.tex)
     * @param pagesCount Pages count.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToLaTeX (name: string, outPath: string, pagesCount?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to MOBIXML format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.mobixml)
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToMobiXml (name: string, outPath: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to PdfA format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param type Type of PdfA format.
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToPdfA (name: string, outPath: string, type: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     */
    public async putPdfInStorageToPptx (name: string, outPath: string, separateImages?: boolean, slidesAsImages?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to SVG format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.svg)
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToSvg (name: string, outPath: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (folder !== undefined && null !== folder) {
            localVarQueryParameters['folder'] = ObjectSerializer.serialize(folder, "string");
        }

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     */
    public async putPdfInStorageToTiff (name: string, outPath: string, brightness?: number, compression?: string, colorDepth?: string, leftMargin?: number, rightMargin?: number, topMargin?: number, bottomMargin?: number, orientation?: string, skipBlankPages?: boolean, width?: number, height?: number, xResolution?: number, yResolution?: number, pageIndex?: number, pageCount?: number, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
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
     * @param storage The document storage.
     */
    public async putPdfInStorageToXls (name: string, outPath: string, insertBlankColumnAtFirst?: boolean, minimizeTheNumberOfWorksheets?: boolean, scaleFactor?: number, uniformWorksheets?: boolean, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XML format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xml)
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToXml (name: string, outPath: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document (located on storage) to XPS format and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.xps)
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putPdfInStorageToXps (name: string, outPath: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document polyline annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putPolyLineAnnotation (name: string, annotationId: string, annotation: PolyLineAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolyLineAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/polyline/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPolyLineAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putPolyLineAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putPolyLineAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "PolyLineAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "PolyLineAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document polygon annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putPolygonAnnotation (name: string, annotationId: string, annotation: PolygonAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PolygonAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/polygon/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPolygonAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putPolygonAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putPolygonAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "PolygonAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "PolygonAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document popup annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putPopupAnnotation (name: string, annotationId: string, annotation: PopupAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: PopupAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/popup/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPopupAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putPopupAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putPopupAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "PopupAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "PopupAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Update privilege document.
     * @param name The document name.
     * @param privileges Document privileges. 
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putPrivileges (name: string, privileges?: DocumentPrivilege, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/privileges'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putPrivileges.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert PS file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.ps)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putPsInStorageToPdf (name: string, srcPath: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document redaction annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putRedactionAnnotation (name: string, annotationId: string, annotation: RedactionAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: RedactionAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/redaction/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putRedactionAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putRedactionAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putRedactionAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "RedactionAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "RedactionAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document image.
     * @param name The document name.
     * @param imageId The image ID.
     * @param imageFilePath Path to image file if specified. Request content is used otherwise.
     * @param storage The document storage.
     * @param folder The document folder.
     * @param image Image file.
     */
    public async putReplaceImage (name: string, imageId: string, imageFilePath?: string, storage?: string, folder?: string, image?: Buffer) : Promise<{ response: http.IncomingMessage; body: ImageResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/images/{imageId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'imageId' + '}', encodeURIComponent(String(imageId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putReplaceImage.');
        }

        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling putReplaceImage.');
        }

        if (imageFilePath !== undefined && null !== imageFilePath) {
            localVarQueryParameters['imageFilePath'] = ObjectSerializer.serialize(imageFilePath, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "ImageResponse");
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
    public async putSearchableDocument (name: string, storage?: string, folder?: string, lang?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Add/update document property.
     * @param name 
     * @param propertyName 
     * @param value 
     * @param storage 
     * @param folder 
     */
    public async putSetProperty (name: string, propertyName: string, value: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: DocumentPropertyResponse;  }> {
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

        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling putSetProperty.');
        }

        if (value !== undefined && null !== value) {
            localVarQueryParameters['value'] = ObjectSerializer.serialize(value, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document sound annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putSoundAnnotation (name: string, annotationId: string, annotation: SoundAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SoundAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/sound/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSoundAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putSoundAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putSoundAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "SoundAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SoundAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Extract document sound annotation content to storage
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param outFilePath The output file path.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putSoundAnnotationDataExtract (name: string, annotationId: string, outFilePath: string, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/sound/{annotationId}/data/extract'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSoundAnnotationDataExtract.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putSoundAnnotationDataExtract.');
        }

        // verify required parameter 'outFilePath' is not null or undefined
        if (outFilePath === null || outFilePath === undefined) {
            throw new Error('Required parameter outFilePath was null or undefined when calling putSoundAnnotationDataExtract.');
        }

        if (outFilePath !== undefined && null !== outFilePath) {
            localVarQueryParameters['outFilePath'] = ObjectSerializer.serialize(outFilePath, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document square annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putSquareAnnotation (name: string, annotationId: string, annotation: SquareAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquareAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/square/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSquareAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putSquareAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putSquareAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "SquareAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SquareAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document squiggly annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putSquigglyAnnotation (name: string, annotationId: string, annotation: SquigglyAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: SquigglyAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/squiggly/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putSquigglyAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putSquigglyAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putSquigglyAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "SquigglyAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "SquigglyAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document StrikeOut annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putStrikeOutAnnotation (name: string, annotationId: string, annotation: StrikeOutAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: StrikeOutAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/strikeout/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putStrikeOutAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putStrikeOutAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putStrikeOutAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "StrikeOutAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "StrikeOutAnnotationResponse");
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
     * @param storage The document storage.
     */
    public async putSvgInStorageToPdf (name: string, srcPath: string, adjustPageSize?: boolean, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document text annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putTextAnnotation (name: string, annotationId: string, annotation: TextAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: TextAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/text/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putTextAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putTextAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putTextAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "TextAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "TextAnnotationResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Replace document underline annotation
     * @param name The document name.
     * @param annotationId The annotation ID.
     * @param annotation Annotation.
     * @param storage The document storage.
     * @param folder The document folder.
     */
    public async putUnderlineAnnotation (name: string, annotationId: string, annotation: UnderlineAnnotation, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: UnderlineAnnotationResponse;  }> {
        const localVarPath = this.basePath + '/pdf/{name}/annotations/underline/{annotationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'annotationId' + '}', encodeURIComponent(String(annotationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling putUnderlineAnnotation.');
        }

        // verify required parameter 'annotationId' is not null or undefined
        if (annotationId === null || annotationId === undefined) {
            throw new Error('Required parameter annotationId was null or undefined when calling putUnderlineAnnotation.');
        }

        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling putUnderlineAnnotation.');
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
            body: ObjectSerializer.serialize(annotation, "UnderlineAnnotation")
        };

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        const response = await invokeApiMethod(localVarRequestOptions, this.configuration, false, fileData);
        const result =  ObjectSerializer.deserialize(response.body, "UnderlineAnnotationResponse");
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
    public async putUpdateField (name: string, fieldName: string, field?: Field, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FieldResponse;  }> {
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
    public async putUpdateFields (name: string, fields?: Fields, storage?: string, folder?: string) : Promise<{ response: http.IncomingMessage; body: FieldsResponse;  }> {
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
     * @param storage The document storage.
     */
    public async putWebInStorageToPdf (name: string, url: string, height?: number, width?: number, isLandscape?: boolean, marginLeft?: number, marginBottom?: number, marginRight?: number, marginTop?: number, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document which contatins XFA form (in request content) to PDF with AcroForm and uploads resulting file to storage.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param storage The document storage.
     * @param file A file to be converted.
     */
    public async putXfaPdfInRequestToAcroForm (outPath: string, storage?: string, file?: Buffer) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Converts PDF document which contatins XFA form (located on storage) to PDF with AcroForm and uploads resulting file to storage
     * @param name The document name.
     * @param outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
     * @param folder The document folder.
     * @param storage The document storage.
     */
    public async putXfaPdfInStorageToAcroForm (name: string, outPath: string, folder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XML file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xml)
     * @param xslFilePath Full XSL source filename (ex. /folder1/folder2/template.xsl)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putXmlInStorageToPdf (name: string, srcPath: string, xslFilePath?: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XPS file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xps)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putXpsInStorageToPdf (name: string, srcPath: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }


    /**
     * 
     * @summary Convert XslFo file (located on storage) to PDF format and upload resulting file to storage. 
     * @param name The document name.
     * @param srcPath Full source filename (ex. /folder1/folder2/template.xpsfo)
     * @param dstFolder The destination document folder.
     * @param storage The document storage.
     */
    public async putXslFoInStorageToPdf (name: string, srcPath: string, dstFolder?: string, storage?: string) : Promise<{ response: http.IncomingMessage; body: AsposeResponse;  }> {
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

        if (storage !== undefined && null !== storage) {
            localVarQueryParameters['storage'] = ObjectSerializer.serialize(storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }
}

