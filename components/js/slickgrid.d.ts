import { OnChanges, OnInit, OnDestroy, SimpleChange, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IObservableCollection, IGridDataRow, IColumnDefinition } from './interfaces';
import { ISlickRange } from './selectionmodel';
export declare class SlickGrid implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private _el;
    private _gridSyncService;
    columnDefinitions: IColumnDefinition[];
    dataRows: IObservableCollection<IGridDataRow>;
    resized: Observable<any>;
    editableColumnIds: string[];
    highlightedCells: {
        row: number;
        column: number;
    }[];
    blurredColumns: string[];
    contextColumns: string[];
    columnsLoading: string[];
    overrideCellFn: (rowNumber, columnId, value?, data?) => string;
    showHeader: boolean;
    showDataTypeIcon: boolean;
    enableColumnReorder: boolean;
    enableAsyncPostRender: boolean;
    selectionModel: string;
    plugins: string[];
    loadFinished: EventEmitter<void>;
    cellChanged: EventEmitter<{
        column: string;
        row: number;
        newValue: any;
    }>;
    editingFinished: EventEmitter<any>;
    contextMenu: EventEmitter<{
        x: number;
        y: number;
    }>;
    topRowNumber: number;
    topRowNumberChange: EventEmitter<number>;
    onFocus(): void;
    rowHeight: number;
    private _rowHeight;
    private _grid;
    private _gridColumns;
    private _gridData;
    private _resizeSubscription;
    private _gridSyncSubscription;
    private _topRow;
    private _leftPx;
    private static getDataWithSchema(data, columns);
    constructor(_el: any, _gridSyncService: any);
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    private invalidateRange(start, end);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onResize(): void;
    getSelectedRanges(): ISlickRange[];
    registerPlugin(plugin: string): void;
    setActive(): void;
    selection: ISlickRange[] | boolean;
    private getColumnEditor;
    private getFormatter;
    private initGrid();
    private subscribeToScroll();
    private subscribeToCellChanged();
    private updateColumnWidths();
    subscribeToContextMenu(): void;
    private updateSchema();
    private getImagePathForDataType(type);
    private setCallbackOnDataRowsChanged();
    private renderGridDataRowsRange(startIndex, count);
}
