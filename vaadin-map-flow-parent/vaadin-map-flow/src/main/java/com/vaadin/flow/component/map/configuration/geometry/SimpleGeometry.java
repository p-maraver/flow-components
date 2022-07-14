package com.vaadin.flow.component.map.configuration.geometry;

/*
 * #%L
 * Vaadin Map
 * %%
 * Copyright 2000-2022 Vaadin Ltd.
 * %%
 * This program is available under Commercial Vaadin Developer License
 * 4.0 (CVDLv4).
 *
 * See the file license.html distributed with this software for more
 * information about licensing.
 *
 * For the full License, see <https://vaadin.com/license/cvdl-4.0>.
 * #L%
 */

import com.vaadin.flow.component.map.configuration.AbstractConfigurationObject;

/**
 * Abstract base class for geometries
 */
public abstract class SimpleGeometry extends AbstractConfigurationObject {
    /**
     * Translate the geometry by the specified delta
     *
     * @param deltaX
     *            amount to move on x-axis
     * @param deltaY
     *            amount to move on y-axis
     */
    public abstract void translate(double deltaX, double deltaY);
}
