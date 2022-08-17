/*
 * Copyright 2022 Vaadin Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.vaadin.flow.component.tabsheet;

import java.util.HashMap;
import java.util.Map;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HasSize;
import com.vaadin.flow.component.HasStyle;
import com.vaadin.flow.component.HasTheme;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
// import com.vaadin.flow.component.shared.SlotUtils;

/**
 * 
 * @author Vaadin Ltd.
 */
@Tag("vaadin-tabsheet")
// @JsModule("@vaadin/tabsheet/src/vaadin-tabsheet.js")
// @NpmPackage(value = "@vaadin/vaadin-tabsheet", version = "23.2.0-alpha6")

// PROTO MODULES
@JsModule("./vaadin-tabsheet.js")
@NpmPackage(value = "@vaadin/tabs", version = "23.2.0-alpha6")
@NpmPackage(value = "@vaadin/component-base", version = "23.2.0-alpha6")
@NpmPackage(value = "@vaadin/vaadin-themable-mixin", version = "23.2.0-alpha6")
public class TabSheet extends Component implements HasSize, HasStyle, HasTheme {

    private Tabs tabs = new Tabs();

    private Map<Tab, Component> tabToContent = new HashMap<>();

    public TabSheet() {
        super();

        tabs.getElement().setAttribute("slot", "tabs");
        getElement().appendChild(tabs.getElement());

        tabs.addSelectedChangeListener(e -> updatePanels());
    }

    private void updatePanels() {
        // Iterate tabToContent
        for (Map.Entry<Tab, Component> entry : tabToContent.entrySet()) {
            Tab tab = entry.getKey();
            Component panelContent = entry.getValue();
            
            if (tab.equals(tabs.getSelectedTab())) {
                if (!panelContent.isAttached()) {
                    getElement().appendChild(panelContent.getElement());
                }
                panelContent.getElement().setEnabled(true);
            } else {
                panelContent.getElement().getNode().setEnabled(false);
            }
        }
    }

    public void add(Component tabContent, Component panelContent) {
        var tab = new Tab(tabContent);
        tab.setId("tab-" + tabs.getElement().getChildCount());
        tabs.getElement().appendChild(tab.getElement());

        panelContent.getElement().setAttribute("tab", tab.getId().get());
        panelContent.getElement().setAttribute("slot", "panel");

        tabToContent.put(tab, panelContent);

        if (tabs.getSelectedTab() == null) {
            tabs.setSelectedTab(tab);
        }

        updatePanels();
    }

    public void add(String tabCaption, Component panelContent) {
        add(new Span(tabCaption), panelContent);
    }


    /**
     * Adds the given component into this field before the content, replacing
     * any existing prefix component.
     * <p>
     * This is most commonly used to add a simple icon or static text into the
     * field.
     *
     * @param component
     *            the component to set, can be {@code null} to remove existing
     *            prefix component
     */
     public void setPrefixComponent(Component component) {
        // SlotUtils.clearSlot(this, "prefix");

        if (component != null) {
            component.getElement().setAttribute("slot", "prefix");
            getElement().appendChild(component.getElement());
        }
    }

    /**
     * Gets the component in the prefix slot of this field.
     *
     * @return the prefix component of this field, or {@code null} if no prefix
     *         component has been set
     * @see #setPrefixComponent(Component)
     */
     Component getPrefixComponent() {
        // return SlotUtils.getChildInSlot(this, "prefix");
        return null;
    }

    /**
     * Adds the given component into this field after the content, replacing any
     * existing suffix component.
     * <p>
     * This is most commonly used to add a simple icon or static text into the
     * field.
     *
     * @param component
     *            the component to set, can be {@code null} to remove existing
     *            suffix component
     */
    public void setSuffixComponent(Component component) {
        // SlotUtils.clearSlot(this, "suffix");

        if (component != null) {
            component.getElement().setAttribute("slot", "suffix");
            getElement().appendChild(component.getElement());
        }
    }

    /**
     * Gets the component in the suffix slot of this field.
     *
     * @return the suffix component of this field, or {@code null} if no suffix
     *         component has been set
     * @see #setPrefixComponent(Component)
     */
     Component getSuffixComponent() {
        // return SlotUtils.getChildInSlot(this, "suffix");
        return null;
    }

}
