import { OnChanges, OnInit, OnDestroy, SimpleChange, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IObservableCollection, IGridDataRow, IColumnDefinition } from './interfaces';
import { ISlickRange } from './selectionModel';
export declare class SlickGrid implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private _el;
    private _gridSyncService;
    columnDefinitions: IColumnDefinition[];
    dataRows: IObservableCollection<IGridDataRow>;
    resized: Observable<any>;
    highlightedCells: {
        row: number;
        column: number;
    }[];
    blurredColumns: string[];
    contextColumns: string[];
    columnsLoading: string[];
    showHeader: boolean;
    showDataTypeIcon: boolean;
    enableColumnReorder: boolean;
    enableAsyncPostRender: boolean;
    selectionModel: string | Slick.SelectionModel<any, any>;
    plugins: Array<string | Slick.Plugin<any>>;
    enableEditing: boolean;
    topRowNumber: number;
    overrideCellFn: (rowNumber, columnId, value?, data?) => string;
    isColumnEditable: (column: number) => boolean;
    isCellEditValid: (row: number, column: number, newValue: any) => boolean;
    private _rowHeight;
    loadFinished: EventEmitter<void>;
    editingFinished: EventEmitter<any>;
    contextMenu: EventEmitter<any>;
    topRowNumberChange: EventEmitter<number>;
    activeCellChanged: EventEmitter<{
        row: number;
        column: number;
    }>;
    cellEditBegin: EventEmitter<{
        row: number;
        column: number;
    }>;
    cellEditExit: EventEmitter<{
        row: number;
        column: number;
        newValue: any;
    }>;
    rowEditBegin: EventEmitter<{
        row: number;
    }>;
    rowEditExit: EventEmitter<{
        row: number;
    }>;
    onFocus(): void;
    rowHeight: number;
    private _grid;
    private _gridColumns;
    private _columnNameToIndex;
    private _gridData;
    private _resizeSubscription;
    private _gridSyncSubscription;
    private _topRow;
    private _leftPx;
    private _activeEditingRow;
    private _activeEditingRowHasChanges;
    constructor(_el: any, _gridSyncService: any);
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    enterEditSession(): void;
    endEditSession(): void;
    readonly onSelectedRowsChanged: Slick.Event<Slick.OnSelectedRowsChangedEventArgs<any>>;
    getSelectedRows(): number[];
    getColumnIndex(name: string): number;
    getSelectedRanges(): ISlickRange[];
    registerPlugin(plugin: Slick.Plugin<any> | string): void;
    setActive(): void;
    selection: ISlickRange[] | boolean;
    subscribeToContextMenu(): void;
    private initGrid();
    private changeEditSession(enabled);
    private handleEditorCellChange(rowNumber);
    private static getDataWithSchema(data, columns);
    private onResize();
    private invalidateRange(start, end);
    private getColumnEditor;
    private getFormatter;
    private subscribeToScroll();
    private subscribeToCellChanged();
    private subscribeToBeforeEditCell();
    private subscribeToActiveCellChanged();
    private updateColumnWidths();
    private updateSchema();
    private getImagePathForDataType(type);
    private setCallbackOnDataRowsChanged();
    private renderGridDataRowsRange(startIndex, count);
}
