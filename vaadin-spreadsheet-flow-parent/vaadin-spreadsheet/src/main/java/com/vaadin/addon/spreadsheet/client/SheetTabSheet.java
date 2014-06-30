package com.vaadin.addon.spreadsheet.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.InputElement;
import com.google.gwt.dom.client.Style.Display;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventListener;
import com.google.gwt.user.client.ui.Widget;

public class SheetTabSheet extends Widget {

    public interface SheetTabSheetHandler {
        public void onSheetTabSelected(int tabIndex);

        public void onSheetRename(int selectedTabIndex, String value);

        public void onNewSheetCreated();

        public void onSheetRenameCancel();

        public void onFirstTabIndexChange(int tabScrollIndex);
    }

    private static final String SELECTED_TAB_CLASSNAME = "selected-tab";

    private DivElement root = Document.get().createDivElement();
    // div containing the tabs
    private DivElement container = Document.get().createDivElement();

    private DivElement options = Document.get().createDivElement();

    private DivElement scrollBeginning = Document.get().createDivElement();

    private DivElement scrollEnd = Document.get().createDivElement();

    private DivElement scrollLeft = Document.get().createDivElement();

    private DivElement scrollRight = Document.get().createDivElement();

    private DivElement addNewSheet = Document.get().createDivElement();

    private InputElement input = Document.get().createTextInputElement();

    private DivElement tempElement = Document.get().createDivElement();

    private JsArray<JavaScriptObject> tabs = JsArray.createArray().cast();

    private final SheetTabSheetHandler handler;

    private int selectedTabIndex = -1;

    private int tabScrollIndex;

    private int tabScrollMargin;

    private boolean readOnly;

    private boolean editing;

    private String cachedSheetName = "";

    public SheetTabSheet(SheetTabSheetHandler handler) {
        this.handler = handler;

        initDOM();
        initListeners();
    }

    private void initDOM() {
        scrollBeginning.setClassName("scroll-tabs-beginning");
        scrollBeginning.setInnerText("<<");
        scrollEnd.setClassName("scroll-tabs-end");
        scrollEnd.setInnerText(">>");
        scrollLeft.setClassName("scroll-tabs-left");
        scrollLeft.setInnerText("<");
        scrollRight.setClassName("scroll-tabs-right");
        scrollRight.setInnerText(">");

        addNewSheet.setClassName("add-new-tab");
        addNewSheet.setInnerText("+");

        options.setClassName("sheet-tabsheet-options");
        options.appendChild(scrollBeginning);
        options.appendChild(scrollLeft);
        options.appendChild(scrollRight);
        options.appendChild(scrollEnd);
        options.appendChild(addNewSheet);

        container.setClassName("sheet-tabsheet-container");

        tempElement.setClassName("sheet-tabsheet-temp");
        root.appendChild(tempElement);

        root.setClassName("sheet-tabsheet");
        root.appendChild(options);
        root.appendChild(container);

        setElement(root);
    }

    private void initListeners() {
        Event.sinkEvents(root, Event.ONCLICK | Event.ONDBLCLICK);
        Event.setEventListener(root, new EventListener() {

            @Override
            public void onBrowserEvent(Event event) {
                final Element target = event.getEventTarget().cast();
                final int type = event.getTypeInt();
                if (target.equals(input)) {
                    return;
                }
                event.stopPropagation();
                if (type == Event.ONCLICK) {
                    if (editing && !readOnly) {
                        commitSheetName();
                    }
                    if (options.isOrHasChild(target)) {
                        if (target.equals(scrollBeginning)) {
                            tabScrollMargin = 0;
                            tabScrollIndex = 0;
                            container.getStyle().setMarginLeft(tabScrollMargin,
                                    Unit.PX);
                            showHideScrollIcons();
                            handler.onFirstTabIndexChange(tabScrollIndex);
                        } else if (target.equals(scrollLeft)) {
                            if (tabScrollIndex > 0) {
                                tabScrollIndex--;
                                if (tabScrollIndex == 0) {
                                    tabScrollMargin = 0;
                                } else {
                                    tabScrollMargin += ((Element) tabs.get(
                                            tabScrollIndex).cast())
                                            .getOffsetWidth();
                                }
                                container.getStyle().setMarginLeft(
                                        tabScrollMargin, Unit.PX);
                            }
                            showHideScrollIcons();
                            handler.onFirstTabIndexChange(tabScrollIndex);
                        } else if (target.equals(scrollRight)) {
                            if (tabScrollIndex < (tabs.length() - 1)) {
                                tabScrollMargin -= ((Element) tabs.get(
                                        tabScrollIndex).cast())
                                        .getOffsetWidth();
                                container.getStyle().setMarginLeft(
                                        tabScrollMargin, Unit.PX);
                                tabScrollIndex++;
                                showHideScrollIcons();
                                handler.onFirstTabIndexChange(tabScrollIndex);
                            }
                        } else if (target.equals(scrollEnd)) {
                            int tempIndex = getLastTabVisibleWithScrollIndex();
                            setFirstVisibleTab(tempIndex);
                            handler.onFirstTabIndexChange(tabScrollIndex);
                        } else if (target.equals(addNewSheet)) {
                            if (!readOnly) {
                                handler.onNewSheetCreated();
                            }
                        }
                    } else if (container.isOrHasChild(target)) {
                        for (int i = 0; i < tabs.length(); i++) {
                            if (tabs.get(i).equals(target)) {
                                if (i != selectedTabIndex) {
                                    handler.onSheetTabSelected(i);
                                }
                            }
                        }
                    }
                } else if (type == Event.ONDBLCLICK) {
                    if (!readOnly) {
                        for (int i = 0; i < tabs.length(); i++) {
                            if (tabs.get(i).equals(target)) {
                                if (i != selectedTabIndex) {
                                    handler.onSheetTabSelected(i);
                                } else {
                                    editing = true;
                                    Element e = tabs.get(i).cast();
                                    cachedSheetName = e.getInnerText();
                                    input.setValue(cachedSheetName);
                                    e.setInnerText("");
                                    e.appendChild(input);
                                    input.focus();
                                    updateInputSize();
                                }
                            }
                        }
                    }
                }
            }

        });
        Event.sinkEvents(input, Event.ONKEYDOWN | Event.ONKEYUP | Event.ONBLUR);
        Event.setEventListener(input, new EventListener() {

            @Override
            public void onBrowserEvent(Event event) {
                final int type = event.getTypeInt();
                if (editing) {
                    if (type == Event.ONBLUR) {
                        commitSheetName();
                    } else {
                        switch (event.getKeyCode()) {
                        case KeyCodes.KEY_ENTER:
                        case KeyCodes.KEY_TAB:
                            commitSheetName();
                            break;
                        case KeyCodes.KEY_ESCAPE:
                            editing = false;
                            input.removeFromParent();
                            Element element = (Element) tabs.get(
                                    selectedTabIndex).cast();
                            element.getStyle().clearWidth();
                            element.setInnerText(cachedSheetName);
                            handler.onSheetRenameCancel();
                            break;
                        default:
                            doDeferredInputSizeUpdate();
                            break;
                        }
                    }
                }
                event.stopPropagation();
            }
        });
    }

    private void doDeferredInputSizeUpdate() {
        Scheduler.get().scheduleDeferred(new ScheduledCommand() {

            @Override
            public void execute() {
                updateInputSize();
            }
        });
    }

    private int getLastTabVisibleWithScrollIndex() {
        return getTabVisibleWithScrollIndex(tabs.length() - 1);
    }

    private int getTabVisibleWithScrollIndex(int tabIndex) {
        int tempWidth = root.getOffsetWidth() - 86;
        tempWidth -= ((Element) tabs.get(tabIndex).cast()).getOffsetWidth();

        while (tabIndex > 0
                && (tempWidth - ((Element) tabs.get(tabIndex - 1).cast())
                        .getOffsetWidth()) > 0) {
            tabIndex--;
            tempWidth -= ((Element) tabs.get(tabIndex).cast()).getOffsetWidth();
        }
        return tabIndex;
    }

    private void updateInputSize() {
        String text = input.getValue();
        if (text.length() > 31) {
            text = text.substring(0, 31);
            input.setValue(text);
        }
        tempElement.setInnerText(text);
        int textWidth = tempElement.getOffsetWidth();
        if (textWidth < 50) {
            textWidth = 50;
        }
        // check that the edited tab doesn't overflow the tab sheet
        Element selectedTab = (Element) tabs.get(selectedTabIndex).cast();
        int rootAbsoluteRight = root.getAbsoluteRight();
        int selectedTabAbsoluteRight = selectedTab.getAbsoluteRight() + 10;
        while (selectedTabAbsoluteRight > rootAbsoluteRight
                && tabScrollIndex < (tabs.length() - 1)) {
            int width = ((Element) tabs.get(tabScrollIndex).cast())
                    .getOffsetWidth();
            selectedTabAbsoluteRight -= width;
            tabScrollMargin -= width;
            tabScrollIndex++;
        }
        container.getStyle().setMarginLeft(tabScrollMargin, Unit.PX);
        input.getStyle().setWidth(textWidth, Unit.PX);
        selectedTab.getStyle().setWidth(textWidth + 10, Unit.PX);
    }

    private void commitSheetName() {
        editing = false;
        input.removeFromParent();
        Element selectedTab = tabs.get(selectedTabIndex).cast();
        selectedTab.getStyle().clearWidth();
        String value = input.getValue();
        if (validateSheetName(value) && !cachedSheetName.equals(value)) {
            for (int i = 0; i < tabs.length(); i++) {
                // value cannot be the same as with another sheet
                if (value.equals(((Element) tabs.get(i).cast()).getInnerText())) {
                    selectedTab.setInnerText(cachedSheetName);
                    return;
                }
            }
            handler.onSheetRename(selectedTabIndex, value);
            selectedTab.setInnerText(value);
            showHideScrollIcons();
        } else {
            // TODO show error ?
            selectedTab.setInnerText(cachedSheetName);
        }
    }

    private boolean validateSheetName(String sheetName) {
        if (sheetName == null) {
            return false;
        }
        int len = sheetName.length();
        if (len < 1 || len > 31) {
            return false;
        }

        for (int i = 0; i < len; i++) {
            char ch = sheetName.charAt(i);
            switch (ch) {
            case '/':
            case '\\':
            case '?':
            case '*':
            case ']':
            case '[':
            case ':':
                return false;
            default:
                // all other chars OK
                continue;
            }
        }
        if (sheetName.charAt(0) == '\'' || sheetName.charAt(len - 1) == '\'') {
            return false;
        }
        return true;
    }

    private Element createTabElement(String tabName) {
        final Element e = Document.get().createDivElement();
        e.setInnerText(tabName);
        e.setClassName("sheet-tabsheet-tab");
        return e;
    }

    public void addTab(String tabName) {
        Element e = createTabElement(tabName);
        container.appendChild(e);
        tabs.push(e);
        showHideScrollIcons();
    }

    public void addTabs(String[] tabNames) {
        for (String tabName : tabNames) {
            Element e = createTabElement(tabName);
            container.appendChild(e);
            tabs.push(e);
        }
        showHideScrollIcons();
    }

    public void setTabs(String[] tabNames, boolean clearScrollPosition) {
        // remove unnecessary tabs
        if (clearScrollPosition) {
            container.getStyle().clearMarginLeft();
            tabScrollIndex = 0;
            tabScrollMargin = 0;
        }
        for (int i = tabNames.length; i < tabs.length(); i++) {
            ((Element) tabs.get(i).cast()).removeFromParent();
        }
        tabs.setLength(tabNames.length);
        for (int i = 0; i < tabNames.length; i++) {
            JavaScriptObject jso = tabs.get(i);
            if (jso != null) {
                ((Element) jso.cast()).setInnerText(tabNames[i]);
            } else {
                Element newTab = createTabElement(tabNames[i]);
                container.appendChild(newTab);
                tabs.set(i, newTab);
            }
        }
        if (selectedTabIndex >= (tabs.length())) {
            selectedTabIndex = -1;
        }

        showHideScrollIcons();
    }

    public void removeAllTabs() {
        for (int i = 0; i < tabs.length(); i++) {
            Element e = tabs.get(i).cast();
            e.removeFromParent();
        }
        container.getStyle().clearMarginLeft();
        tabs.setLength(0);
        selectedTabIndex = -1;
        tabScrollIndex = 0;
    }

    /**
     * 
     * @param sheetIndex
     *            1-based
     */
    public void setSelectedTab(int sheetIndex) {
        if (selectedTabIndex != -1) {
            ((Element) tabs.get(selectedTabIndex).cast())
                    .removeClassName(SELECTED_TAB_CLASSNAME);
        }
        selectedTabIndex = sheetIndex - 1;
        Element selectedTab = ((Element) tabs.get(selectedTabIndex).cast());
        selectedTab.addClassName(SELECTED_TAB_CLASSNAME);
        if (tabScrollIndex > selectedTabIndex) {
            setFirstVisibleTab(selectedTabIndex);
        } else {
            if (root.getAbsoluteBottom() < selectedTab.getAbsoluteBottom()
                    && !editing) {
                int tempIndex = getTabVisibleWithScrollIndex(selectedTabIndex);
                setFirstVisibleTab(tempIndex);
            }
        }
    }

    public void setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
        addNewSheet.getStyle().setDisplay(
                readOnly ? Display.NONE : Display.INLINE);
    }

    public void setFirstVisibleTab(int firstVisibleTab) {
        if (tabScrollIndex < firstVisibleTab) {
            do {
                tabScrollMargin -= ((Element) tabs.get(tabScrollIndex).cast())
                        .getOffsetWidth();
                tabScrollIndex++;
            } while (tabScrollIndex < firstVisibleTab);
            container.getStyle().setMarginLeft(tabScrollMargin, Unit.PX);
        } else if (tabScrollIndex > firstVisibleTab) {
            do {
                tabScrollIndex--;
                tabScrollMargin += ((Element) tabs.get(tabScrollIndex).cast())
                        .getOffsetWidth();
            } while (tabScrollIndex > firstVisibleTab);
            container.getStyle().setMarginLeft(tabScrollMargin, Unit.PX);
        }
        showHideScrollIcons();
    }

    private void showHideScrollIcons() {
        if (tabScrollIndex == 0) {
            scrollLeft.addClassName("hidden");
            scrollBeginning.addClassName("hidden");
        } else {
            scrollLeft.removeClassName("hidden");
            scrollBeginning.removeClassName("hidden");
        }
        int lastTabVisibleWithScrollIndex = getLastTabVisibleWithScrollIndex();
        if (tabScrollIndex < lastTabVisibleWithScrollIndex) {
            scrollRight.removeClassName("hidden");
            scrollEnd.removeClassName("hidden");
        } else {
            scrollRight.addClassName("hidden");
            scrollEnd.addClassName("hidden");
        }
    }
}
